# Welcome to PowerDale

PowerDale is a small town with around 100 residents. Most houses have a smart meter installed that can save and send
information about how much energy a house has consumed. Each household needs to sign up with one of the available power
suppliers, and choose a pricing plan offered by them. The household energy consumption is then charged based on the
selected pricing plan.

# Introducing JOI Energy

JOI Energy is a new start-up in the energy industry. Rather than selling energy, they want to differentiate themselves
from the market by recording their customers' energy usage from their smart meters and recommending the best supplier to
meet their needs.

This codebase currently implements the logic for storing and fetching energy consumption readings from a smart meter,
as well as the logic to recommend the cheapest price plan for a particular household's energy consumption patterns.

## Initial Rollout

There are three major power suppliers in town, each with their own pricing plans:

- _Dr Evil's Dark Energy_
- _The Green Eco_
- _Power for Everyone_

To trial the new JOI software 5 residents have agreed to test the service and share their energy data.

| User   | Smart Meter ID  | Power Supplier        |
| ------ | --------------- | --------------------- |
| Chitra | `smart-meter-0` | Dr Evil's Dark Energy |
| Paolo  | `smart-meter-1` | The Green Eco         |
| Sarah  | `smart-meter-2` | Dr Evil's Dark Energy |
| Andrei | `smart-meter-3` | Power for Everyone    |
| Jingyi | `smart-meter-4` | The Green Eco         |

These values are used in the examples and tests.

## Requirements

The project requires [Node v14](https://nodejs.org/).

## Useful Node commands

The project makes use of node and its package manager to help you out carrying some common tasks such as building the
project or running it.

### Install dependencies

```console
$ npm install
```

### Run the tests

There are two options to run the tests

- Run the tests once

  ```console
  $ npm test
  ```

- Keep running the tests with every change

  ```console
  $ npm run test-watch
  ```

### Run the application

- Run the application with the current code

  ```console
  $ npm start
  ```

- Run the application with reload on save

  ```console
  $ npm run dev
  ```
