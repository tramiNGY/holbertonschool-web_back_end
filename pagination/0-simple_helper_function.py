#!/usr/bin/env python3
"""
should return a tuple of size two containing a start index
and an end index corresponding to the range of indexes
to return in a list for those particular pagination parameters.
Page numbers are 1-indexed, i.e. the first page is page 1.
"""


def index_range(page: int, page_size: int) -> tuple:
    """
    Simple helper function
    """
    start_index = (page - 1) * page_size
    end_index = start_index + page_size
    return (start_index, end_index)
