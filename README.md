<p align="center">
  <img width="250" src="https://github.com/knfs-jsc/bamimi-log/blob/master/docs/images/logo-background.png?raw=true">
  <br>
	<a href="https://app.fossa.com/projects/git%2Bgithub.com%2Fknfs-jsc%2Fbamimi-log?ref=badge_shield&issueType=license" alt="FOSSA Status"><img src="https://app.fossa.com/api/projects/git%2Bgithub.com%2Fknfs-jsc%2Fbamimi-log.svg?type=shield&issueType=license"/></a>
	<a href="https://app.fossa.com/projects/git%2Bgithub.com%2Fknfs-jsc%2Fbamimi-log?ref=badge_shield&issueType=security" alt="FOSSA Status"><img src="https://app.fossa.com/api/projects/git%2Bgithub.com%2Fknfs-jsc%2Fbamimi-log.svg?type=shield&issueType=security"/></a>
	<a href="https://scrutinizer-ci.com/g/knfs-jsc/bamimi-log/build-status/master"alt="scrutinizer">
	<img src="https://scrutinizer-ci.com/g/knfs-jsc/bamimi-log/badges/build.png?b=master" alt="Build Status" /></a>
	<a href="https://scrutinizer-ci.com/g/knfs-jsc/bamimi-log/?branch=master"alt="scrutinizer">
	<img src="https://scrutinizer-ci.com/g/knfs-jsc/bamimi-log/badges/quality-score.png?b=master" alt="Scrutinizer Code Quality" /></a>
	<a href="https://github.com/knfs-jsc/bamimi-log/actions"alt="scrutinizer">
	<!-- <img src="https://github.com/knfs-jsc/bamimi-log/actions" alt="github" /></a> -->
</p>

<h1> <span style="color:#013C4D;">About</span> <span style="color:#2B7F84;">Bamimi log</span></h1>


This is a package that helps you log with level fatal,error, warn, info, debug, trace, all

---

## Install

```bash
npm i @knfs-tech/bamimi-log
#or
yarn add @knfs-tech/bamimi-log
```

## Usage

```js
const Logger = require("@knfs-tech/bamimi-log")

new Logger("test log")
//console.info (info)
//console.debug (debug)
//console.trace (trace)
//console.log (all)
/**
 * {
 *   timestamp: "2024-09-11T15:27:30+00:00",
 *   level: {
 *		key: info,
 *		value: 3
 *	},
 *	message: "test log"
 * }
 */
/**
 * {
 *   timestamp: "2024-09-11T15:27:30+00:00",
 *   level: {
 *		key: debug,
 *		value: 4
 *	},
 *	message: "test log"
 * }
 */
/**
 * {
 *   timestamp: "2024-09-11T15:27:30+00:00",
 *   level: {
 *		key: trace,
 *		value: 5
 *	},
 *	message: "test log"
 * }
 */

/**
 * {
 *   timestamp: "2024-09-11T15:27:30+00:00",
 *   level: {
 *		key: all,
 *		value: 6
 *	},
 *	message: "test log"
 * }
 */

new Logger("test log", "error")
//console.error (error)
//console.error (warn)
//console.info (info)
//console.debug (debug)
//console.trace (trace)
//console.log (all)
/**
 * {
 *   timestamp: "2024-09-11T15:27:30+00:00",
 *   level: {
 *		key: error,
 *		value: 1
 *	},
 *	message: "test log"
 * }
 */
/**
 * {
 *   timestamp: "2024-09-11T15:27:30+00:00",
 *   level: {
 *		key: warn,
 *		value: 2
 *	},
 *	message: "test log"
 * }
 */
/**
 * {
 *   timestamp: "2024-09-11T15:27:30+00:00",
 *   level: {
 *		key: info,
 *		value: 3
 *	},
 *	message: "test log"
 * }
 */
/**
 * {
 *   timestamp: "2024-09-11T15:27:30+00:00",
 *   level: {
 *		key: debug,
 *		value: 4
 *	},
 *	message: "test log"
 * }
 */
/**
 * {
 *   timestamp: "2024-09-11T15:27:30+00:00",
 *   level: {
 *		key: trace,
 *		value: 5
 *	},
 *	message: "test log"
 * }
 */

/**
 * {
 *   timestamp: "2024-09-11T15:27:30+00:00",
 *   level: {
 *		key: all,
 *		value: 6
 *	},
 *	message: "test log"
 * }
 */


```

## Author
* [Kent Phung](https://github.com/khapu2906)
  
## Owner
* [Knfs.,jsc](https://github.com/knfs-jsc)


## License

Bamimi is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fknfs-jsc%2Fbamimi-log.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fknfs-jsc%2Fbamimi-log?ref=badge_large)