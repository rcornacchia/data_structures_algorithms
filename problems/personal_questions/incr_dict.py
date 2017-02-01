from collections import deque

dct = {}

def incr_dict(dct, args):
    nodes = deque(args)
    curr = dct
    while nodes:
        node = nodes.popleft()
        if node in curr.keys():
            if len(nodes) == 0:
                curr[node] += 1
            else:
                curr = curr[node]
        else:
            if len(nodes) == 0:
                curr[node] = 1
            else:
                curr[node] = {}
                curr = curr[node]
    print dct


incr_dict(dct, ('a', 'b', 'c'))
incr_dict(dct, ('a', 'b', 'c'))
incr_dict(dct, ('a', 'b', 'f'))
incr_dict(dct, ('a', 'r', 'f'))
incr_dict(dct, ('a', 'z'))

































# Consider a function incr_dict, which takes two arguments, which behaves like this in Python:
# >>> dct = {}
# >>> incr_dict(dct, ('a', 'b', 'c'))
# >>> dct
# {'a': {'b': {'c': 1}}}
# >>> incr_dict(dct, ('a', 'b', 'c'))
# >>> dct
# {'a': {'b': {'c': 2}}}
# >>> incr_dict(dct, ('a', 'b', 'f'))
# >>> dct
# {'a': {'b': {'c': 2, 'f': 1}}}
# >>> incr_dict(dct, ('a', 'r', 'f'))
# >>> dct
# {'a': {'r': {'f': 1}, 'b': {'c': 2, 'f': 1}}}
# >>> incr_dict(dct, ('a', 'z'))
# >>> dct
# {'a': {'r': {'f': 1}, 'b': {'c': 2,'f': 1}, 'z': 1}}
# >>>
# incr_dict(dct, ('a', 'b', 'c')) is conceptually like:
# dct['a']['b']['c'] += 1
# except that it creates any necessary intermediate and leaf nodes.
# Implement incr_dict in Python or any language that supports dictionaries.
# Write executable tests for your function.
# Will your implementation continue to work well if the tuple is extremely long?
