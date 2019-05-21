# NAPNG
**N**ew **A**nimated **PNG**: A simpler form of the `apng` format.  
These docs are for version `01.00.00`



<br><hr>

## File Layout
| Address | Section |
|:---:|---|
| `0000` | Version & Type |
| `000C` | Creation & Edit Metadata |
| `004C` | Frames |



<br><hr>

## Section Layouts

### Version & Type
| Address | Subsection | Value(s) |
|:---:|---|---|
| `0000` | Type Declaration | `NAPNG` |
| `0005` | Major Version | `01` |
| `0007` | Minor Version | `00` |
| `0009` | Revision | `00` |
| `000B` | Compression Mode | `P`NG, `R`LE, or `Z`ip. |

### Creation & Edit Metadata
| Address | Subsection | Value(s) |
|:---:|---|---|
| `000C` | Creation Date | `0`s if never created. |
| `001C` | Edit Date | `0`s if never edited. |
| `002C` | Creation Software | `?` if never created. |
| `003C` | Edit Software | `?` if never edited. |

### Frames
| Address | Subsection | Value(s) |
|:---:|---|---|
| `004C` | Frame 1 | Frame data |
| *Relative* | Frame 2 | Frame data |
| *Relative* | Frame 3 | Frame data |
| *Continued* | Frame *...* | Frame data |
