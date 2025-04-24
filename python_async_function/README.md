# Python Asynchronous Programming Project

## Introduction

This project focuses on learning asynchronous programming in Python using the `asyncio` library. Asynchronous programming allows for running multiple tasks concurrently without blocking the main execution flow, which is essential in I/O-bound applications. This is achieved through coroutines and tasks, which are managed by the event loop provided by `asyncio`.

## Asynchronous Programming in Python

Asynchronous programming in Python is implemented using `async` and `await` syntax, enabling non-blocking behavior for I/O operations. It allows you to write code that can handle multiple tasks at once, without waiting for each task to complete before moving on to the next one. This is especially useful when dealing with I/O operations like network requests, file reading, or database queries.

### Key Concepts:
- **`async def`**: Defines a coroutine function.
- **`await`**: Used to pause the execution of a coroutine until the result of an awaited task is available.
- **Event Loop**: Manages the execution of all coroutines and tasks.
- **Coroutine**: A special type of function that can pause its execution and be resumed later.
- **Task**: A wrapper around a coroutine, used to manage and track the execution of the coroutine.

The main goal of asynchronous programming is to improve performance and responsiveness by allowing multiple tasks to run concurrently without waiting for each other to complete.

## Modules Used

### `asyncio`

- **`asyncio`** is a Python module used to write concurrent code using the `async`/`await` syntax. It provides the event loop, coroutines, and tasks necessary to handle asynchronous I/O-bound operations.
- **Key Functions**:
  - **`asyncio.run()`**: Runs the main coroutine and closes the event loop when the coroutine completes.
  - **`asyncio.create_task()`**: Schedules a coroutine to run as a Task within the event loop.
  - **`asyncio.as_completed()`**: Returns results of coroutines as they complete, ensuring that the results are processed in the order of completion rather than submission.

### `random`

- **`random`** is a Python module used to generate pseudo-random numbers. In this project, it is used to simulate random delays between coroutines by generating random floats within a specified range.
- **Key Functions**:
  - **`random.uniform(a, b)`**: Returns a floating-point number between `a` and `b` (inclusive). This is used to simulate the random delay each coroutine waits before completing.

### `time`

- **`time`** is a built-in Python module that provides various time-related functions. In this project, it is used to measure the time taken for multiple coroutines to complete, which helps in evaluating the performance of the asynchronous code.
- **Key Functions**:
  - **`time.time()`**: Returns the current time in seconds since the epoch (Unix timestamp), which can be used to measure the duration of code execution.
  - **`time.perf_counter()`**: Provides a high-resolution timer to measure short durations accurately. It is ideal for measuring execution time when performance is critical.
  