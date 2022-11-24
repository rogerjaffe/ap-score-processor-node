## AP Score Report Pre-processor

### The Problem

The AP exam score reports contain all of the information you would expect -- name, address, school, etc.

However... AP test scores are listed on the same line that contains the student records in the order they were administered.
This makes it extremely difficult to analyze the scores in any meaningful way because individual courses won't be in the same columns for different students.

### The Solution

This pre-processor reads the data file provided by the AP program and rearranges the data so it can be read into an Excel or Google spreadsheet where it can be analyzed via pivot tables.

Five sets of spreadsheet tables are generated:

* Students
* Ethnicities
* Scores
* Scores with Ethnicities
* Awards

#### Ethnicities

Students can report multiple ethnicities. The pre-processor will generate one line of student data for each ethnicity, so if a student reports two ethnicities, there will be one line of student information for each ethnicity.

#### Scores

Scores are treated like ethnicities.  The AP score report shows all of the AP tests the student has taken, including those taken in previous years.  The pre-processor generates one line of data for each exam and score.

#### Scores and Ethnicities

This report permutes ethnicities and scores so that each score is paired with every ethnicity. This pairing allows the spreadsheet to generate a pivot table that looks at AP scores vs ethnicities.   

#### Awards

Since students may receive more than one award over their AP career, awards are presented in the same way as scores and ethnicities.

### Usage

1. Download the files
2. `npm install`
3. `npm build`
4. `cd build/src`
5. `node main <year> <path/to/datafile> [path/to/output/folder]`

### Notes

* There is an anonymized data file in the `data` folder you can use to try it out.

* The output folder defaults to `output` in the project folder

* The contents of the output folder will be overwritten with no warning! Be careful! 

* Paths are relative to the current folder when running the program.  You can use relative paths (i.e. `../data/2022-tiny.csv` or absolute paths `/usr/User/data/2022-tiny.csv`)

#### References

<span style="font-size:0.75rem">Node Typescript template forked from `https://github.com/jsynowiec/node-typescript-boilerplate/`</span>
