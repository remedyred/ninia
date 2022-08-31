# @snickbit/ninia

## Table of contents

### Namespaces

- [useStore](modules/useStore.md)

### Classes

- [Ninia](classes/Ninia.md)
- [Store](classes/Store.md)

### Interfaces

- [StoreOptions](interfaces/StoreOptions.md)
- [StoreState](interfaces/StoreState.md)

### Type Aliases

- [Pending](README.md#pending)
- [PromiseResolve](README.md#promiseresolve)
- [StoreAction](README.md#storeaction)
- [StoreActions](README.md#storeactions)
- [StoreGetter](README.md#storegetter)
- [StoreGetters](README.md#storegetters)
- [StoreId](README.md#storeid)
- [StoreKey](README.md#storekey)
- [StoreValue](README.md#storevalue)
- [Stores](README.md#stores)
- [Waiting](README.md#waiting)
- [WaitingArray](README.md#waitingarray)

### Variables

- [ninia](README.md#ninia)

### Functions

- [createStore](README.md#createstore)
- [useStore](README.md#usestore)

## Type Aliases

### Pending

Ƭ **Pending**: `Record`<[`StoreId`](README.md#storeid), [`Store`](classes/Store.md)\>

___

### PromiseResolve

Ƭ **PromiseResolve**<`T`\>: (`value?`: `PromiseLike`<`T`\> \| `T`) => `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

▸ (`value?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `PromiseLike`<`T`\> \| `T` |

##### Returns

`void`

___

### StoreAction

Ƭ **StoreAction**: (`this`: [`Store`](classes/Store.md), ...`args`: `any`[]) => `any`

#### Type declaration

▸ (`this`, ...`args`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Store`](classes/Store.md) |
| `...args` | `any`[] |

##### Returns

`any`

___

### StoreActions

Ƭ **StoreActions**: `Record`<`string`, [`StoreAction`](README.md#storeaction)\>

___

### StoreGetter

Ƭ **StoreGetter**: (`this`: [`Store`](classes/Store.md)) => [`StoreValue`](README.md#storevalue)

#### Type declaration

▸ (`this`): [`StoreValue`](README.md#storevalue)

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Store`](classes/Store.md) |

##### Returns

[`StoreValue`](README.md#storevalue)

___

### StoreGetters

Ƭ **StoreGetters**: `Record`<`string`, [`StoreGetter`](README.md#storegetter)\>

___

### StoreId

Ƭ **StoreId**: `string`

___

### StoreKey

Ƭ **StoreKey**: `string`

___

### StoreValue

Ƭ **StoreValue**: `any`

___

### Stores

Ƭ **Stores**: `Record`<[`StoreId`](README.md#storeid), [`Store`](classes/Store.md)\>

___

### Waiting

Ƭ **Waiting**: `Record`<[`StoreId`](README.md#storeid), [`WaitingArray`](README.md#waitingarray)\>

___

### WaitingArray

Ƭ **WaitingArray**: [`PromiseResolve`](README.md#promiseresolve)<`any`\>[]

## Variables

### ninia

• `Const` **ninia**: [`Ninia`](classes/Ninia.md)

## Functions

### createStore

▸ **createStore**(`name?`, `options?`, `hydration?`): [`Store`](classes/Store.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `'default'` |
| `options` | `Object` | `{}` |
| `hydration` | `Object` | `{}` |

#### Returns

[`Store`](classes/Store.md)

___

### useStore

▸ **useStore**(`name?`): [`Store`](classes/Store.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `'default'` |

#### Returns

[`Store`](classes/Store.md)
