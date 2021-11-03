# Hexagonal Architecture test

This is a test for a software house

## Installation

Clone this repository

```bash
git clone https://github.com/Miggu4n/hexapp_test
```

Run the core

```bash
docker compose up
```

## Usage

Once started, this core will send an email to everyone who's birthday is today. It will check the db and send the emails every midnight.

## API

You can create a new birthday reminder sending a POST request to

```bash
http://your_domain:4000/api/birthdays
```

the body accepts

```typescript
{
   "email":"your_email@domain.com",
   "birthday":"yyyy-MM-dd",
   "firstName":"Joe",
   "lastName":"The big toe" // Not required,

}
```

it response with

```typescript
{
   "_id":"mongodb_ObjectId",
}
```

You can also get a list of people who's birthday is today sending a GET request to

```bash
http://your_domain:4000/api/birthdays
```
