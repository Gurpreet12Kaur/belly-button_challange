# belly-button_challange
JAVA SCRIPT

For this assignment, I will create an interactive dashboard to investigate the Belly Button Biodiversity dataset, which documents the microorganisms inhabiting human navels.

From the dataset, I can see that a few microbial species (known as operational taxonomic units, or OTUs, in the study) were found in over 70% of individuals, while the others were comparatively less common.

These are the task i had to complete: 
Here are the tasks, reworded in a first-person perspective:

1. **Data Loading**: I will utilize the D3 library to fetch the data from the following URL: [https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json](https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json).

2. **Horizontal Bar Chart**: I will construct a horizontal bar chart that comes with a dropdown menu. This chart will reveal the top 10 Operational Taxonomic Units (OTUs) present in the selected individual's navel. I will utilize the `sample_values` as the data for the bars, `otu_ids` as the labels for the bars, and `otu_labels` for the hover text.

3. **Bubble Chart**: I will generate a bubble chart that visually represents each sample. This chart will use `otu_ids` for the x-axis, `sample_values` for the y-axis, `sample_values` for determining the marker size, `otu_ids` for setting marker colors, and `otu_labels` for labeling the data points.

4. **Sample Metadata Display**: To provide context, I will display the demographic information associated with the selected individual. This information will include each key-value pair from the metadata JSON object, and it will be presented somewhere on the webpage.



Overall this challenge was good, i didn't have much challenges :)
