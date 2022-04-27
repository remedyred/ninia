import mitt from 'mitt'
import {uuid} from '@snickbit/utilities'
import {Store} from './Store'

export type StoreId = string

export type Stores = Record<StoreId, Store>
export type Pending = Record<StoreId, Store>

export type PromiseResolve<T> = (value?: T | PromiseLike<T>) => void

export type WaitingArray = PromiseResolve<any>[]
export type Waiting = Record<StoreId, WaitingArray>

export class Ninia {
	private static _instance: Ninia
	private static _id: string
	stores: Stores = {}
	waiting: Waiting = {}
	pending: Pending = {}
	emitter = mitt()

	constructor() {
		if (Ninia._instance) {
			return Ninia._instance
		}
		Ninia._instance = this
		Ninia._id = uuid()
	}

	wait(id: StoreId, resolve: PromiseResolve<any>): void {
		if (!this.waiting[id]) this.waiting[id] = []
		this.waiting[id].push(resolve)
	}

	get(id: StoreId) {
		return this.stores[id]
	}

	set(id: StoreId, value: Store) {
		this.stores[id] = value
		if (this.waiting[id]) {

			for (const cb of this.waiting[id]) {
				cb(value)
			}

			delete this.waiting[id]
		}
	}

	events() {
		return this.emitter.all
	}


	on(...args: any[]): void {
		const callback = args.pop()
		this.emitter.on(args.join('.'), callback)
	}


	off(...args: any[]): void {
		const callback = args.pop()
		this.emitter.off(args.join('.'), callback)
	}


	emit(...args: any[]): void {
		const data = args.pop()
		this.emitter.emit(args.join('.'), data)
	}
}

