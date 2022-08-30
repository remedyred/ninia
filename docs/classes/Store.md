# Class: Store

## Indexable

▪ [key: `string` \| `symbol`]: `any`

## Table of contents

### Constructors

- [constructor](Store.md#constructor)

### Properties

- [options](Store.md#options)

### Accessors

- [$id](Store.md#$id)
- [$ready](Store.md#$ready)

### Methods

- [$config](Store.md#$config)
- [$emit](Store.md#$emit)
- [$get](Store.md#$get)
- [$has](Store.md#$has)
- [$keys](Store.md#$keys)
- [$off](Store.md#$off)
- [$on](Store.md#$on)
- [$patch](Store.md#$patch)
- [$reset](Store.md#$reset)
- [$set](Store.md#$set)

## Constructors

### constructor

• **new Store**(`name`, `options?`, `hydration?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `options?` | `Partial`<[`StoreOptions`](../interfaces/StoreOptions.md)\> |
| `hydration?` | [`StoreState`](../interfaces/StoreState.md) |

## Properties

### options

• **options**: [`StoreOptions`](../interfaces/StoreOptions.md)

## Accessors

### $id

• `get` **$id**(): `string`

#### Returns

`string`

___

### $ready

• `get` **$ready**(): `boolean`

#### Returns

`boolean`

## Methods

### $config

▸ **$config**(`name`, `options?`, `hydration?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `options?` | `Partial`<[`StoreOptions`](../interfaces/StoreOptions.md)\> |
| `hydration?` | [`StoreState`](../interfaces/StoreState.md) |

#### Returns

`void`

___

### $emit

▸ **$emit**(`event`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `data` | `any` |

#### Returns

`void`

___

### $get

▸ **$get**(`key`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`any`

___

### $has

▸ **$has**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`boolean`

___

### $keys

▸ **$keys**(): `string`[]

#### Returns

`string`[]

___

### $off

▸ **$off**(`event`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `callback` | `Handler`<`unknown`\> |

#### Returns

`void`

___

### $on

▸ **$on**(`event`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `callback` | `Handler`<`unknown`\> |

#### Returns

`void`

___

### $patch

▸ **$patch**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`StoreState`](../interfaces/StoreState.md) |

#### Returns

`void`

___

### $reset

▸ **$reset**(): `void`

#### Returns

`void`

___

### $set

▸ **$set**(`key`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |

#### Returns

`void`
