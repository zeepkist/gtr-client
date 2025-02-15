# GTR API

> [!WARNING]  
> This package is deprecated. The GTR and Zworpshop APIs are now available to be consumed as GraphQL or JSON:API resources.
>
> 1. Switch to the [fully typed & always-up-to-date GraphQL implementation](https://github.com/zeepkist/graphql) of GTR/Zworpshop ([`@zeepkist/graphql`](https://github.com/zeepkist/graphql))
> 1. Or, switch to the [JSON:API](https://jsonapi.org/format/) implementation using [`kitsu`](https://github.com/wopian/kitsu/tree/master/packages/kitsu) or [`kitsu-core`](https://github.com/wopian/kitsu/tree/master/packages/kitsu-core)
>
>    For `kitsu`, setup the client for use with GTR and/or Zworpshop as follows:
>
>    ```js
>    import Kitsu from 'kitsu'
>
>    // setup the GTR client
>    const gtr = new Kitsu({
>      baseURL: 'https://jsonapi.zeepkist-gtr.com',
>      query: 'modern',
>      pluralize: false
>    })
>
>    // fetch Records resources
>    const records = await gtr.get('records', {
>      params: {
>        sort: 'time',
>        include: 'user',
>        fields: {
>          users: 'steamId,steamName',
>          medias: 'ghostUrl,screenshotUrl'
>        },
>        filter: "and(equals(isValid,'true'),equals(level,'BD3B71EB2AF356D3747E5674261E0589CEE79B3E'))",
>        page: {
>          size: 5, // 5 items per page
>          number: 2 // page 2 of results
>        }
>      }
>    })
>
>    // setup the Zworpshop client
>    const zworpshop = new Kitsu({
>      baseURL: 'https://jsonapi.zworpshop.com',
>      query: 'modern',
>      pluralize: false
>    })
>
>    // fetch Levels resources
>    const levels = await zworpshop.get('levels', {
>      params: {
>        sort: '-name',
>        include: 'metadata',
>        fields: {
>          levels: 'name,metadata',
>          metadata: 'hash,validation,gold,silver,bronze,valid'
>        },
>        filter: "and(equals(metadata.valid,'false'),lessThan(metadata.gold,'50.125'))",
>        page: {
>          size: 5, // 5 items per page
>          number: 3 // page 3 of results
>        }
>      }
>    })
>    ```
>    For more examples, see the [kitsu](https://github.com/wopian/kitsu/tree/master/packages/kitsu#quick-start) documentation (e.g fetching resources, single resource, relationships and relationships of relationships etc)
>    
>    See the [JsonApiDotNetCore documentation](https://www.jsonapi.net/usage/reading/filtering.html) on valid filtering options.

Fully typed TypeScript API client for the [GTR API](https://api.zeepkist-gtr.com).

Up-to-date with `v0.20.1` of the GTR API.

Download the GTR mod for Zeepkist in [Modkist](https://zeepkist.fandom.com/wiki/Modkist_(Mod_Manager)) (Zeepkist's Mod Loader) or on [mod.io](https://zeepkist.mod.io/zeepkist-gtr)

## Usage

### CDN

```html
<script type="module">
  import { getRecords } from 'https://esm.run/@zeepkist/gtr-api'

  async function displayRecords() {
    const records = await getRecords({
      BestOnly: true
    })

    console.log(records) // { totalAmount: 700, records: [{ ... }] }
  }

  displayRecords()
</script>
```

### Deno

```js
import { getRecords } from 'https://esm.run/@zeepkist/gtr-api'

const records = await getRecords({
  BestOnly: true
})

console.log(records) // { totalAmount: 700, records: [{ ... }] }
```


### Node / Bundlers

#### Install dependencies

```sh
yarn add @zeepkist/gtr-api

# or with npm:
npm install @zeepkist/gtr-api
```

#### Import and use

```ts
import { getRecords } from '@zeepkist/gtr-api'

const records = await getRecords({
  BestOnly: true
})

console.log(records) // { totalAmount: 700, records: [{ ... }] }
```

To see all available exports and options, see the [package documentation](https://zeepkist.github.io/gtr-client).

### How to get a token

1. Redirect your user to `https://auth.zeepkist-gtr.com/external/login?redirectUrl={redirectUrl}` where `{redirectUrl}` is the URL you want to redirect the user to after they have logged in.

2. After the user has logged in, they will be redirected to `{redirectUrl}?token={token}` where `{token}` is a base64 encoded JSON object containing the user's token and other information.

3. Decode the object and use the `AccessToken` property to authenticate your requests.

4. The token is valid for a short period. Once the `AccessExpiry` time has passed, you will need to obtain a new token by sending a request to `https://auth.zeepkist-gtr.com/external/refresh?token={token}` where `{token}` is the `RefreshToken` from the decoded object in Step 3. The response will be a base64 encoded object containing the new `AccessToken`. If the `RefreshExpiry` time has passed, you will need to start the process again from Step 1.

## Contributing

### First-time Project Setup

```sh
yarn
yarn dlx @yarnpkg/sdks vscode
```

### Compile and Hot-Reload for Development

```sh
yarn dev
```

### Type-Check, Compile and Minify for Production

```sh
yarn build
```

### Run tests

```sh
yarn test
```

### Run tests with code coverage

```sh
yarn coverage
```

### Lint with [ESLint](https://eslint.org/)

```sh
yarn lint
```
