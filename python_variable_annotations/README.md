# Python - Variable Annotations
This project explores type annotations in Python and how they improve code readability, static analysis, and error checking using tools like mypy. It also revisits fundamental Python concepts such as mutability, memory management, object identity, and duck typing.

## Learning Objectives
- Understand how dynamic typing works in Python
- Learn to annotate variables and function signatures
- Discover the typing module for complex data types
- Know the difference between mutable and immutable objects
- Understand how variables reference objects in memory
- Apply duck typing and static validation with mypy
- Recognize Python's object interning and pre-allocation strategies

## Typing module
The typing module allows you to specify complex types for functions, variables, and more in Python. This is essential for:

✅ Improving code readability

✅ Helping static analysis tools like mypy, pyright, pyre, etc.

✅ Enabling smart autocompletion and type hints in IDEs
## Variable and Function Annotations
### **Basic Annotations**
Simple types like int, float, str, and bool can be used directly in annotations without importing any module.
```
a: int       # Integer
b: float     # Floating-point number
c: str       # String
d: bool      # Boolean
```

### **Complex Types (using typing module)**
To annotate more complex data structures and behaviors, Python provides the typing module. It includes:

1. ✅ Homogeneous List (List[T])
```
from typing import List

grades: List[int] = [12, 15, 17]
names: List[str] = ["Alice", "Bob"]
```
2. ✅ Mixed List (with multiple types)

Union[A, B] means the value can be either A or B.
```
from typing import List, Union

mixed: List[Union[int, str]] = [1, "Alice", 2, "Bob"]
```
3. ✅ Tuple (fixed-length, positional types)
```
from typing import Tuple

coordinates: Tuple[float, float] = (1.2, 3.4)

# it can also mix types:

person: Tuple[str, int] = ("Alice", 30)
```
4. ✅ Dictionary (Dict[key_type, value_type])
```
from typing import Dict

ages: Dict[str, int] = {"Alice": 30, "Bob": 25}
```
5. ✅ Set
```
from typing import Set

unique_ids: Set[int] = {1, 2, 3}
```
6. ✅ Optional (a value that can also be None)
```
from typing import Optional

nickname: Optional[str] = None  # Equivalent to Union[str, None]
```
7. ✅ Any (no type restriction)

Use Any when the type is unknown or can be literally anything.
```
from typing import Any

data: Any = get_data_from_api()

```
8. ✅ Callable (function types)
```
from typing import Callable

# A function that takes two ints and returns a string
callback: Callable[[int, int], str]
```
9. ✅ Iterable (any object you can loop over)

🔁 Use Iterable[T] when the argument can be looped over, but you don’t care about indexing or length.
It includes things like list, set, tuple, str, dict.keys(), and even custom generators.
✅ Great for read-only iteration.
```
from typing import Iterable

def process_items(items: Iterable[int]) -> None:
    for item in items:
        print(item)
```
10. ✅ Sequence (ordered, indexable, has len())
📚 Use Sequence[T] when you need a specific order, index access (items[0]), and length (len()).
It supports both list and tuple, but not set or dict.
✅ Use when you want something more structured than Iterable, but not necessarily mutable.
```
from typing import Sequence

def first_item(items: Sequence[str]) -> str:
    return items[0]
```

## Python 3.9+: Native Syntax (no more typing.List)
From Python 3.9 onwards, you can use the built-in generic syntax for collections:
```
# Python 3.9+
mixed: list[int | str] = [1, "hello"]
profile: dict[str, int] = {"Alice": 30}
```

## Duck Typing
Duck typing is a principle where an object's suitability is determined by the presence of certain methods or behaviors, rather than its type. In Python, we write functions that operate on any object that implements a required interface, like having a __len__ method, instead of explicitly checking types.

For example, a function that works with any sequence that can be measured with len() follows duck typing. You annotate such parameters using abstract types like Iterable and Sequence.
