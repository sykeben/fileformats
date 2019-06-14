# CSDL
**C**omma **S**eperated **D**ata **L**og: An implimentation of the existing `csv` format optimized for data logging with low-power hardware.

<br><hr>

## File Layout
| Line | Section |
|:---:|---|
| `1` | [File Metadata](#file-metadata) |
| `2` | [Log Metadata](#log-netadata) |
| `3+` | [Log Data](#log-data) |

<br><hr>

## Section Layouts

### File Metadata
| Field | Data | Value(s) |
|:---:|---|---|
| `1` | File Title | Double-quoted string. |
| `2` | Capture Start | Time in POSIX epoch. |
| `3` | Capture Interval | Time in milliseconds. |

### Log Metadata
| Field | Data | Value(s) |
|:---:|---|---|
| `1` | Title for Log `1` | Double-quoted string. |
| `2` | Unit for Log `1` | Double-quoted string. |
| `3` | Error Range for Log `1` | Number stating the "+/-" value of a measurement. |
| `4` | Title for Log `2` | Double-quoted string. |
| `5` | Unit for Log `2` | Double-quoted string. |
| `6` | Error Range for Log `2` | Number stating the "+/-" value of a measurement. |
| *Continued* | Title, Unit, & Error for Log *...* | Continued Data |

### Log Data
| Field | Data | Value(s) |
|:---:|---|---|
| `1` | Value for Log `1` | Data |
| `2` | Value for Log `2` | Data |
| *Continued* | Value for Log *...* | Continued Data |

<br><hr>

## Example File
*The following dump is from [example.csdl](example.csdl)*

<br>

### Raw Contents
```csv
"Exterior Light Angle & Intensity VS Temp", 1560229232, 900000
"Light Angle":"DEG":5, "Light Intensity":"LM":10, "Temperature":"F":0.25
10, 1000, 50
11, 1010, 51
13, 1025, 53
16, 1050, 55
(continued)
```

<br>

### Interpreted Data
**Exterior Light Angle & Itensity VS Temp**
| Time (On 6/11/19) | Angle (Degrees) | Intensity (Lumens) | Temperature (&deg;F) |
|:---:|:---:|:---:|:---:|
| **5:00** | 10 | 1000 | 50 |
| **5:15** | 11 | 1010 | 51 |
| **5:30** | 13 | 1025 | 53 |
| **5:45** | 16 | 1050 | 55 |
| (continued) |