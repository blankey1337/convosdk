# Changelog

## 0.6.5
- Fix `mazury` Adaptor.

## 0.6.4
- Add `mazury` Support to Omnid.
- Update Dependencies.

## 0.6.3
- Add `101badges` Adaptor.
- Update `celo`, `quadrata` Adaptor.
- Update Dependencies.

## 0.6.2
- Improve `rss3`, `layer3`, `tokenblacklist` Adaptors.
- Export types.
- Update Dependencies.

## 0.6.1
- Add HumanBound Token (`hbt`) Adaptor.
- Update Dependencies.

## 0.6.0
- Drop support for Node v12.
- Add adaptors and Improvements.
- Update Dependencies.

## 0.5.19

- Improve `chainabuse`, `quadrata`, `tokenblacklists` Adaptors.
- Update Dependencies

## 0.5.18

- Add support for `scanblocks` Adaptor.
- Improve Kits.
- Update Dependencies.

## 0.5.17

- Add support for `goplus` Adaptor.
- Improve Kits.
- Update Dependencies

## 0.5.16

- Add support for `parallel` Identity to Omnid.
- Update Dependencies

## 0.5.15

- Add support for `isFundedWithTornado` & `tornadoInteractions` to `txn`
  Adaptor.
- Improve Mirror Adaptor.
- Update Dependencies.

## 0.5.14

- Add support for Solana to Omnid.
- Fix browser Build.
- Update Dependencies.

## 0.5.13

- Add Details to all adaptors.
- Add `chainabuse`, `giveth`, `upshot` Adaptors.
- Improve `cryptoscamdb`, `txn`, `quadrata`, `pop` Adaptors.
- Improve Types.
- Update Dependencies.

## 0.5.12

- Add [`rocifi`](https://roci.fi) Credit Score Adaptor.
- Update Dependencies.

## 0.5.11

- Add support for USDP to `tokenblacklist` Adaptor.
- Update Dependencies.

## 0.5.10

- Improve `goldfinch`, `quadrata` Adaptors.
- Add `labels` Adaptors.
- Update Dependencies.

## 0.5.9

- Improve `deepdao`, `tokenblacklists` Adaptors.
- Update Dependencies.

## 0.5.8

- Add `kits` to Omnid.
  - `convo.omnid.kits.isMalicious`

## 0.5.7

- Improve Adaptors.
- Add `huddln` Adaptor.
- Update Dependencies.

## 0.5.6

- Improve Adaptors.
- Add `upala` Adaptor.
- Update Dependencies.

## 0.5.5

- Add `alchemy` adaptor to support
  [`isSpamContract`](https://docs.alchemy.com/alchemy/enhanced-apis/nft-api/isspamcontract).
- Improve `aave`, `zapper` Adaptors.

## 0.5.4

- Improve `klima` Carbon Offset Adaptor.
- Improve `aave` Health Factor Adaptor.
- Reduce Bundle Size.
- Update Dependencies.

## 0.5.3

- Improve `txn` Adaptor, add support for _**Optimism**_.
- Reduce Bundle Size.
- Improve Types.
- Update Dependencies.

## 0.5.2

- Migrate Subgraphs for `quadrata`, `rabbithole`, `tokenblacklists` from
  _**Hosted Service**_ to _**Subgraph Studio**_, Ref:
  [Hosted Service EOL Announcement](https://thegraph.com/blog/sunsetting-hosted-service).
  (Subgraph Studio's support for chains other than Ethereum is coming soon)
- Reduce Browser Build Bundle size.
- Update Dependencies.

## 0.5.1

- Preserve Function names in Build Outputs.
- Update Dependencies.

## 0.5.0

- Migrate `tsc` build process to `esbuild`,
  - ⚡ Made builds ~10x Faster.
  - 🤏 Reduce bundle size.
- Improve Airdrop Mode.
- Update Dependencies & Types.

## 0.4.18

- Add Airdrop mode to comment queries.
  [API](https://docs.theconvo.space/docs/Convo-API/api-docs#querying-comments)
  [SDK](https://docs.theconvo.space/docs/Convo-SDK/comments#query-comments)
- Update Dependencies & Types.

## 0.4.17

- Update Adaptors.
- Update Dependencies.

## 0.4.16

- Update `txn`, `karma` Adaptor.
- Update Dependencies.

## 0.4.15

- Update `lens`, `asyncart`, `cryptorelief`, `mirror` Adaptors.
- Update Dependencies.

## 0.4.14

- Add support for [Upshot gmi](https://upshot.xyz/gmi) Adaptor to Omnid under
  `upshot`.
- Switch `age` to `txn` Adaptor.
- Update Dependencies.

## 0.4.13

- Add support for
  [Specially Designated Nationals](https://home.treasury.gov/policy-issues/financial-sanctions/specially-designated-nationals-and-blocked-persons-list-sdn-human-readable-lists)
  Adaptor to Omnid under `sdn`.
- Add support for USDC, USDT, BUSD blacklists Adaptor to Omnid under
  `tokenblacklists`.
- Update Dependencies.

## 0.4.12

- Add Bird.money Adaptor, Update Mirror Adaptor.
- Add `convo.comments.nuke`.
- Update Dependencies & Types.

## 0.4.11

- Add Commons Stack Adaptor.
- Update Dependencies.

## 0.4.10

- Add Quadrata Adaptor.

## 0.4.9

- Add custom timeout on `convo.threads.query` & `convo.threads.multiQuery`.
- Cleanups.
- Update Dependencies.

## 0.4.8

- Add Issuing & Verification of
  [Verifiable Credentials](https://www.w3.org/TR/vc-data-model/) to Omnid. Try
  them out using `convo.omnid.credentials.issue`,
  `convo.omnid.credentials.verify`.
- Add RabbitHole On-chain Credentials.

## 0.4.7

- Update CryptoscamDB, CryptoRelief Adaptors.
- Improved Benchmarks.

## 0.4.6

- Add Emblem Adaptor.
- Update ArcX & Metagame Adaptors.
- Update Dependencies.

## 0.4.5

- Add LearnWeb3 DAO Adaptor.

## 0.4.4

- Update Mirror, Aave Adaptor.
- Add KlimaDAO Adaptor.
- Update Dependencies.

## 0.4.3

- Update Nodes.
- Update Headers for fetcher
  [https://github.com/anudit/convosdk/pull/5](https://github.com/anudit/convosdk/pull/5)
- Update Dependencies

## 0.4.2

- Add `governordao` Adaptor.
- Update Dependencies.

## 0.4.1

- Custom Timeout on `convo.comments.query`
- Add `convo.listNodes()`, `convo.switchNode()`.
- Change `convo.ping()`, `convo.pingNode()`.

## 0.4.0

- Seperate React Hooks into `@theconvospace/react` package.
  - `convo.threads.subscribe` is now moved to,
    `import { subscribe } from "@theconvospace/react";`
- Update Dependencies.
- Update Error Handling Responses.

## 0.3.39

- Improve Omnid Adaptors.
- Add CryptoRelief Adaptor.
- Update Dependencies.
- Switch to PNPM.

## 0.3.38

- Update `forta` Adaptor,
  [https://github.com/forta-protocol/forta-api/issues/3](https://github.com/forta-protocol/forta-api/issues/3)
- Update Dependencies.

## 0.3.37

- Add `convo.comments.update`.
- Update Dependencies.

## 0.3.36

- Add Goldfinch Adaptor.
- Update Dependencies.

## 0.3.35

- Add Questbook Adaptor.
- Update Dependencies.

## 0.3.34

- Add Layer3 Adaptor.
- Update DeepDAO Adaptor.
- Update Dependencies.

## 0.3.33

- Update Zapper Adaptor.
- Update Dependencies.

## 0.3.32

- Update DeepDao, Project Galaxy, Rabbithole & Zapper Adaptors.
- Add Yup Protocol Adaptor.

## 0.3.31

- Update Coinvise, Aave Adaptors.

## 0.3.30

- Add Karma Protocol Adaptor.
- Update Etherscan Adaptor.
- Update Dependencies.

## 0.3.29

- Add Toucan Carbon Offsets Adaptor to Omnid.
- Add Unipass Adaptor to Omnid.
- Update Forta Adaptor.
- Update Lens Protocol Adaptor.
- Update Dependencies.

## 0.3.28

- Add Zapper Adaptor to Omnid.
- Update Dependencies.

## 0.3.27

- Improve Lens Protocol Adaptor.
- Update Dependencies.

## 0.3.26

- Add Mew Darklist Adaptor to Omnid.
  [https://github.com/MyEtherWallet/ethereum-lists/blob/master/src/addresses/addresses-darklist.json](https://github.com/MyEtherWallet/ethereum-lists/blob/master/src/addresses/addresses-darklist.json)

## 0.3.25

- Add Lens Protocol Adaptor to Omnid.
- Update Dependencies.

## 0.3.24

- Add DeBank Adaptor to Omnid.
- Update Dependencies.

## 0.3.23

- Update Rabbithole, AsyncArt Adaptors.
- Add Proof Of Personhood Adaptor to Omnid.
- Update Dependencies.

## 0.3.22

- Update `convo.threads.subscribe` React hook to initialize Ably only when
  called instead of when `Convo` is initialized.
- Update Dependencies.

## 0.3.21

- Update DeepDAO Adaptor.
- Update Dependencies.

## 0.3.20

- [WIP] Add `convo.threads.subscribe` React hook for Websocket updates.
- Remove `convo.getWebsocketToken`.
- Update SIWE API.
- Update Dependencies.

## 0.3.19

- Add Dapplist Adaptor to Omind.
- Update Dependencies.

## 0.3.18

- Add `convo.getWebsocketToken`
- Add `convo.omnid.getTrustScoreWithProof`
- Add `convo.comments.getComment`
- Add `replyTo`, `tag1`, `tag2` to `convo.comments.create`
  ([#4](https://github.com/anudit/convosdk/issues/4))
- Update Age Adaptor.
- Update Dependencies.

## 0.3.17

- Add Etherscan Labels Adaptor.

## 0.3.16

- Add the ability to disable adaptors while computing score.

## 0.3.15

- Add Support for Forta Alerts.

## 0.3.14

- Update Superrare, Coinvise, Celo Adaptors.
- Add inline Debuging.
- Add AbortController.
- Add Benchmarking to better analyse adaptors.

## 0.3.13

- Improved Error Handling of Fetcher.
- Update Dependencies.

## 0.3.12

- Update RabbitHole, CyberConnect Adaptors.

## 0.3.11

- Improve Omnid's return type.
- Update SIWE.

## 0.3.10

- Improve API key detection.
- Improve Coinvise Adaptor.

## 0.3.9

- Improve Coinvise Adaptor.

## 0.3.8

- Add Hive.one Adaptor.

## 0.3.7

- Improve Age, Coinvise, Idena, Rabbithold, Superrare Adaptors.

## 0.3.6

- Move Price Calculation to Config.

## 0.3.5

- Update Age Adaptor to Support Polygon Network.
- Improved Error Handling.
- Update Dependencies.

## 0.3.4

- Add more Identity Adaptors
- Expose all Adaptors at `convoinstance.omnid.adaptors.*`
- Update Examples

## 0.3.3

- Add more Identity Adaptors

## 0.3.2

- Bug Fixes

## 0.3.1

- Update NodeJS Fetcher Module

## 0.3.0

- Add Identity Adaptors Architecture

## 0.2.12

- Improve Auth Functions.

## 0.2.11

- Improved SIWE Integration
- Start Identity Adaptor Framework

## 0.2.10

- Add V2 Auth Endpoints
- Improvements

## 0.2.9

- SIWE add nonce generation.
- Improve Version detection.

## 0.2.8

- URL detection updates.

## 0.2.7

- Optmize library.

## 0.2.6

- Add Version detection.
- Improve SIWE message generation.

## 0.2.5

- Fix SIWE message generation.
