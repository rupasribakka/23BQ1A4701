# STAGE 1

## Problem

Users are receiving a large number of notifications and often miss important updates. The goal is to display the top 10 most important unread notifications.

## Priority Rules

Notification priority is determined using notification type and recency.

Priority weights:

Placement = 3
Result = 2
Event = 1

Notifications are sorted first by weight and then by timestamp in descending order.

This ensures that Placement notifications appear before Results and Events, while newer notifications appear before older notifications of the same type.

## Implementation

1. Fetch notifications from the Notification API.
2. Assign weights to each notification type.
3. Sort notifications using priority and recency.
4. Select the top 10 notifications.
5. Use Logging Middleware to record:

   * API fetch start
   * API fetch success
   * Sorting completion
   * Error conditions

## Efficient Handling of New Notifications

Instead of sorting the entire dataset whenever a new notification arrives, a Min Heap of size 10 can be maintained.

Advantages:

* O(log n) insertion
* Efficient maintenance of top notifications
* Scalable for large notification volumes

## Output

The application successfully returns the Top 10 priority notifications according to the specified rules.
