# FCC Timestamp Service

Timestamp Service is a simple API that given a date will return a unix and utc timestamp
Challenge from Free Code Camp

## Usage

GET https://jcgraves-timestamp-service.glitch.me/api/timestamp/

I can pass a natural language argument for a date (e.g. 2019-10-15 or October 10, 2019)
<https://jcgraves-timestamp-service.glitch.me/api/timestamp/2019-10-15>

```json
{
  "unix": 1571097600000,
  "utc": "Tue, 15 Oct 2019 00:00:00 GMT"
}
```

OR
I can pass a unix timestamp argument for a date (e.g. 1571097600000)
<https://jcgraves-timestamp-service.glitch.me/api/timestamp/1571097600000>

```json
{
  "unix": 1571097600000,
  "utc": "Tue, 15 Oct 2019 00:00:00 GMT"
}
```

OR
If I pass nothing in I will get a current timestamp

```json
{
  "unix": 1586296288727,
  "utc": "Tue Apr 07 2020 21:51:28 GMT+0000 (Coordinated Universal Time)"
}
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

