# Flowdesk Cumulative Delta

# Overview

As a market maker, having an index that indicates our current cumulative delta on a specific trading pair is essential. It’s used by risk management to evaluate our current position and if we need to take some actions. To achieve this, we consume trades to calculate the cumulative delta.

This is a REST API that provides the cumulative delta of a specific trading pair by fetching the public trades history for a specific pair on the Kucoin exchange and computing the cumulative delta index from the historical trades and return it.

# Getting Started

## Prerequisites

Node.js installed

npm (Node Package Manager) installed

# Installation

## Clone the repository:

```
git clone https://github.com/Pierre-Jean-Sappey-Marinier/flowdesk-cumulative-delta-api.git
```

## Navigate to the project directory:

```
cd flowdesk-cumulative-delta-api
```

## Install dependencies:

```
npm install
```
