# @snickbit/ninia

## Table of contents

### Namespaces

- [useStore](modules/useStore.md)

### Classes

- [Ninia](classes/Ninia.md)
- [Store](classes/Store.md)

### Interfaces

- [StoreOptions](interfaces/StoreOptions.md)

### Type Aliases

- [Pending](README.md#pending)
- [PromiseResolve](README.md#promiseresolve)
- [StoreAction](README.md#storeaction)
- [StoreActions](README.md#storeactions)
- [StoreGetter](README.md#storegetter)
- [StoreGetters](README.md#storegetters)
- [StoreId](README.md#storeid)
- [Stores](README.md#stores)
- [Waiting](README.md#waiting)
- [WaitingArray](README.md#waitingarray)

### Functions

- [createStore](README.md#createstore)
- [useNinia](README.md#useninia)
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

Ƭ **StoreGetter**: (`this`: [`Store`](classes/Store.md)) => `any`

#### Type declaration

▸ (`this`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Store`](classes/Store.md) |

##### Returns

`any`

___

### StoreGetters

Ƭ **StoreGetters**: `Record`<`string`, [`StoreGetter`](README.md#storegetter)\>

___

### StoreId

Ƭ **StoreId**: `string`

___

### Stores

Ƭ **Stores**: `Record`<[`StoreId`](README.md#storeid), [`Store`](classes/Store.md)\>

___

### Waiting

Ƭ **Waiting**: `Record`<[`StoreId`](README.md#storeid), [`WaitingArray`](README.md#waitingarray)\>

___

### WaitingArray

Ƭ **WaitingArray**: [`PromiseResolve`](README.md#promiseresolve)<`any`\>[]

## Functions

### createStore

▸ **createStore**<`State`\>(`name?`, `options?`, `hydration?`): [`Store`](classes/Store.md)<`State`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `State` | extends `object` = `any` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `'default'` |
| `options` | `Partial`<[`StoreOptions`](interfaces/StoreOptions.md)\> | `{}` |
| `hydration` | `State` | `undefined` |

#### Returns

[`Store`](classes/Store.md)<`State`\>

___

### useNinia

▸ **useNinia**(): [`Ninia`](classes/Ninia.md)

#### Returns

[`Ninia`](classes/Ninia.md)

___

### useStore

▸ **useStore**<`State`\>(`name?`): [`Store`](classes/Store.md)<`State`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `State` | extends `object` = `any` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `'default'` |

#### Returns

[`Store`](classes/Store.md)<`State`\>
