import {Ninia, PromiseResolve} from './Ninia'
import {Store, StoreOptions} from './Store'

let _ninia: Ninia
export function useNinia() {
	if (!_ninia) {
		_ninia = new Ninia()
	}
	return _ninia
}

export function createStore<State extends object = any>(name = 'default', options: Partial<StoreOptions> = {}, hydration: State = {} as State): Store<State> {
	const ninia = useNinia()

	if (!ninia.get(name)) {
		let store

		if (ninia.pending[name]) {
			store = ninia.pending[name]
			store.$config(name, options, hydration)
		} else {
			store = new Store<State>(name, options, hydration)
		}

		ninia.set(name, store)
	}

	return ninia.get(name)
}

function createPending<State extends object = any>(name = 'default'): Store<State> {
	const ninia = useNinia()

	ninia.pending[name] = new Store<State>(name)

	return ninia.pending[name]
}

export function useStore<State extends object = any>(name = 'default'): Store<State> {
	const ninia = useNinia()

	if (!ninia.get(name)) {
		return createPending<State>(name)
	}

	return ninia.get(name) as Store<State>
}

useStore.promise = async <State extends object = any>(name = 'default'): Promise<Store<State>> => {
	const ninia = useNinia()

	if (!ninia.get(name)) {
		return new Promise((resolve: PromiseResolve<any>) => ninia.wait(name, resolve))
	}

	return ninia.get(name) as Store<State>
}
