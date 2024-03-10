<p align="center">
	<a href="https://thepurplestandard.org/" target="_blank" rel="noopener noreferrer">
		<img src="https://thepurplewarehouse.com/img/landing/logo-circle.png" width="100" alt="Logo">
	</a>
</p>

<h1 align="center">The Purple Standard</h1>
<h3 align="center"><a href="https://thepurplestandard.com/">thepurplestandard.com</a></h3>

<p align="center">A unified, community-driven standard for FRC scouting data<br>Pioneered by <a href="https://thepurplewarehouse.com">FRC's largest collaborative scouting app</a></p>

# Relevant Links
- [Press Release](https://thepurplewarehouse.com/tps-press-release.pdf)
- [Chief Delphi Thread](https://www.chiefdelphi.com/t/the-purple-standard-a-unified-and-community-driven-standard-for-frc-scouting-data/449394)
- [Quick Reference](/reference.md)
- [Examples](/examples)
- [Interfaces](/interfaces)
- [Properties](/properties)
- [Discord Server](https://thepurplewarehouse.com/discord)
- [The Purple Warehouse Scouting App](https://thepurplewarehouse.com)

# What is TPS

The Purple Standard (TPS) is a unified, community-driven standard for FRC scouting data. After working with 140+ teams who scouted collaboratively with us on The Purple Warehouse (TPW) last year, we realized that many of you still couldn't enjoy the benefits of collaborative scouting because of different scouting interfaces that collect data using incompatible formats. We were able to work with several teams to manually write reformatting scripts, converting their data to our app's format so that they could contribute to and access TPW's pool of shared scouting data. From our experiences this past season working with many different incompatible scouting data formats, we want to propose a better solution.

The goal of TPS is to provide a flexible and consistent data format for scouting to allow any team to easily share scouting data regardless of which interface is used. We hope this will strengthen the FRC scouting ecosystem by allowing more teams to share and receive scouting data which can be corroborated to provide more accurate analysis and insights while requiring less reliance (and pressure) on individual teams. In 2023, we saw that collaborative scouting through TPW significantly helped smaller teams and rookies who weren't able to scout as many matches individually but could still access a fuller picture of the overall event's scouting data by working together.

# How to Collect Specific Data

The goal of TPS is to be completely flexible and customizable regardless of what each scouting app is collecting. None of the properties are required, and if you want to collect data that doesn't yet exist in the TPS properties, you can simply open a PR for it! The hope is that app developers can look at TPS, see if properties exist that they are collecting (and if so, use the existing format to maintain interoperability), and if those properties don't exist, they can simply contribute them to the repo.

# API Docs

`https://api.thepurplestandard.com/v1`

## Authenticate with The Purple Warehouse

To generate an API key, you must first authenticate with a TPW account. Hundreds of teams already have an access token for TPW, but if a team does not have one yet, they can request one by joining our [Discord Server](https://thepurplewarehouse.com/discord).

The request for an authentication flow consists of the following parameters:
```
{
	site: string,
	redirect: string,
	scopes: string[],
	expiration?: number
}
```

The `site` field should contain the hostname of your scouting app (ex: `thepurplewarehouse.com`), the `redirect` field should contain the redirect link back to your site with `<DATA>` somewhere in the URL (ex: `thepurplewarehouse.com/auth/<DATA>`), the scopes field should contain a list of scopes that is necessary for your app to function, and the optional expiration field should contain a timestamp for expiration in Unix milliseconds time format (the number of milliseconds since midnight UTC on January 1st, 1970). If the expiration field is left empty, it will default to ten years in the future.

**Scopes:**
- `tpw.teamNumber` - See TPW team number
- `tpw.scouting.username` - See TPW scouting username
- `tpw.scouting.impersonate` - Perform actions on behalf of other scouters on your team
- `tps.entry.add` - Add TPS scouting entries
- `tps.entry.get` - Get TPS scouting entries
- `tps.entry.edit` - Edit TPS scouting entries
- `tps.entry.delete` - Delete TPS scouting entries

The authentication request parameters must then be encoded in base64 (in JavaScript the code is `btoa(JSON.stringify({...}))`) and passed at the end of the URL `https://thepurplewarehouse.com/scouting/auth/generate/`. Once the user is redirected to this website, they will be able to sign in with their TPW accoount and approve the authentication request.

If the user approves or rejects the request, the `<DATA>` field in the redirect URL will include a base64-encoded JSON object (in JavaScript the code is `JSON.parse(atob("..."))`) with the relevant fields depending on the scopes requested:
```
{
	success: boolean,
	body?: {
		details: {
			key: string,
			teamNumber?: string,
			scoutingUsername?: string
		}
	}
}
```

If the `success` boolean is false, the `body` field will not be included as the user has rejected the authentication request. Otherwise, if the `success` boolean is true, the `body.details.key` field will contain the API key, the `body.details.teamNumber` field will contain the team number, and the `body.details.scoutingUsername` field will contain the username of the scouter that approved the authentication request. The app can then store the API key in the device's local storage for making future API requests with the TPS API, and the `<DATA>` field can be removed from the URL (either by redirecting or by manipulating `window.location.search`, `window.location.hash`, or `window.history`).

The app's logout method should include a function to remove the API key from the device's local storage and then redirect to the TPW authentication request URL with the provided request parameters. Additionally, the app should be able to gracefully handle situations where the API key expires before the provided expiration date as users will be able to enable and disable their API keys in the future.

## Use the API Key

To use the API key, all requests to the TPS API must end with `?key=` followed by the API key.

## POST /entry/add

**Scopes Required:**
- `tps.entry.add`

The `POST /entry/add` route allows apps to submit entries to the TPS API. The body of the POST request must be formatted in the following way:
```
{
	entry: {
		abilities?: any,
		counters?: any,
		data?: any,
		metadata?: any,
		ratings?: any,
		timers?: any
	}
	privacy?: {
		path: string,
		private?: boolean,
		teams?: string[],
		type?: "scrambled" | "redacted" | "excluded",
		detail?: any
	}[]
}
```

The entry field must contain a TPS-formatted scouting entry with `metadata.scouter.team` matching the team number associated with the API key and `metadata.scouter.app` matching the hostname of the app used in the authentication request. Additionally, if the API key does not have the `tpw.scouting.impersonate` scope, the `metadata.scouter.name` field must match the scouting username associated with the API key.

The `privacy` field is an optional array of privacy rules that can protect potentially sensitive data such as usernames and comments from being accessed by other teams. The path field should match the path of the data stored in the TPS format, and the rule will apply to all data under that path. The optional private boolean should indicate whether that data should be considered private (default is `true`). The optional `teams` array should include a whitelist of teams that can be allowed to see that private data (default is `[ metadata.scouter.team ]`). The optional `type` field indicates how the data should be protected. The `scrambled` option will return a portion of a deterministic hash of the data, the `redacted` option will return an indicator that the data has been redacted, and the `excluded` option (default) will simply remove that portion of the data when returning it to another team. The `detail` field can be used to elaborate on how to format `scrambled` or `redacted` data. If using `scrambled` option, the `detail` field can contain a number representing the length of the scrambled data (default is 16, maximum is 64). If using the `redacted` option, the `detail` field can contain the redaction notice (default is `[redacted for privacy]`).

By default, the following privacy rules will be present:
- `{ path: "data.notes", private: true, type: "redacted", detail: "[redacted for privacy]", teams: [ metadata.scouter.team ] }`
- `{ path: "metadata.scouter.name", private: true, type: "scrambled", detail: 16, teams: [ metadata.scouter.team ] }`

Those rules can be overridden if another rule is explicitly provided that either matches the path or matches a parent of that path.

The API response is formatted in the following way:
```
{
	success: boolean,
	body?: {
		hash: string
	}
}
```

The hash is a deterministic representation of the TPS entry and is generated using SHA-256 on the stringified JSON entry where each field in the JSON is sorted in alphabetical order. This hash can be used in other API methods to verify the entry's existence in the TPS database and retrieve the entry. Since the hash is deterministic based on the entry, the TPS database will never store two copies of identical data. When the `metadata.timestamp` property is included, it is highly unlikely that a scouting app will naturally send more than one copy of the exact same data at the exact same millisecond under the exact same scouter.

## GET /entry/verify/:hash

**Scopes Required:**
None (no API key is needed for this request)

The `GET /entry/verify/:hash` route allows apps to verify that an entry exists in the TPS database.

The API response is formatted in the following way:
```
{
	success: boolean,
	body?: {
		verified: boolean
	}
}
```

If the entry exists in the TPS database, the `body.verified` boolean will be `true`.

## GET /entry/get/:hash

**Scopes Required:**
- `tps.entry.get`

The `GET /entry/get/:hash` route allows apps to query TPS entries from the database based on their hash.

The API response is formatted in the following way:
```
{
	success: boolean,
	body?: {
		entry: {
			abilities?: any,
			counters?: any,
			data?: any,
			metadata?: any,
			ratings?: any,
			server?: {
				timestamp?: number,
				accuracy?: number
			},
			timers?: any
		}
	}
}
```

The `body.entry.server` field is inserted by the TPS API and includes fields such as `body.entry.server.timestamp` (the timestamp that the server receives the data in Unix milliseconds time format) and `body.entry.server.accuracy` (the accuracy of the data). Any of these fields, including `server` fields, may be scrambled, redacted, or excluded by previously specified `privacy` rules.

## POST /entry/list

**Scopes Required:**
- `tps.entry.get`

## GET /entry/event/:event

**Scopes Required:**
- `tps.entry.get`

## GET /entry/latest/:event

**Scopes Required:**
None (no API key is needed for this request)

The `GET /entry/latest/:latest` route allows apps to get the latest match scouted in a TPS entry for a certain event.

The API response is formatted in the following way:
```
{
	success: boolean,
	body?: {
		latest: {
			level: string,
			number: number,
			set: set
		}
	}
}
```

The `body.latest` field is formatted according to the [metadata.match](/properties/metadata/match.md) property.