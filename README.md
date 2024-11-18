
# WhatsApp Link Sender API

## Overview

The **WhatsApp Link Sender API** is a backend service designed to simplify and automate the process of sending Google Review links to customers via WhatsApp. This project is tailored for businesses, such as hotels, restaurants, or service providers, allowing them to collect customer reviews efficiently and boost their online presence.

The API integrates with the **Twilio WhatsApp API** to ensure reliable and scalable message delivery. It supports batch processing, enabling businesses to send personalized review links to hundreds or even thousands of customers in a single request.

## Features

* **Batch Messaging** : Send review links to multiple WhatsApp numbers simultaneously.
* **Phone Number Validation** : Ensures all numbers are formatted correctly (e.g., starting with `+91` for Indian numbers).
* **Error Handling** : Tracks and reports messages that fail to deliver, ensuring transparency and reliability.
* **Business Integration** : Fetches business-specific review links dynamically based on the provided business ID.
* **Scalability** : Handles large batches of phone numbers with asynchronous processing for high performance.
* **RESTful API Design** : Designed with standard REST principles for easy integration with front-end or third-party applications.
