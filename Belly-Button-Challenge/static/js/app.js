// URL setup
const url =
  "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

const dataPromise = d3.json(url);
console.log("Data Promise", dataPromise);

// Fetching JSON data and console log it
d3.json(url).then(function(data) {
    console.log(data);

    // Setting up variables
    var samples;
    var meta_data;

    // Dropdown selector
    let selector = d3.select("#selDataset");

    // Visualization
    meta_data = data.metadata;
    samples = data.samples;

    // Iterating over an array of 'names' in the 'data' object.
    data.names.forEach((id) => {
        // Populate the dropdown options
        selector.append("option").text(id).property("value", id);
    });

    metaData(meta_data[0]);
    hbarChart(samples[0]);
    bubbleChart(samples[0]);

    function optionChanged(value) {
        const selectedID = samples.find((item) => item.id == value);
        const demographicINFO = meta_data.find((item) => item.id == value);

        metaData(demographicINFO);

        hbarChart(selectedID);

        bubbleChart(selectedID);
    }

    function metaData(demographicINFO) {
        let demoSelect = d3.select("#sample-metadata");

        demoSelect.html(`
            id: ${demographicINFO.id} <br>
            ethnicity: ${demographicINFO.ethnicity} <br>
            gender: ${demographicINFO.gender} <br>
            age: ${demographicINFO.age} <br>
            location: ${demographicINFO.location} <br>
            bbtype: ${demographicINFO.bbtype} <br>
            wfreq: ${demographicINFO.wfreq} <br>
        `);
    }

    function hbarChart(selectedID) {
        let x_axis = selectedID.sample_values.slice(0, 10).reverse();
        let y_axis = selectedID.otu_ids
            .slice(0, 10)
            .reverse()
            .map((item) => `OTU ${item}`);
        let text = selectedID.otu_labels.slice(0, 10).reverse();

        const barChart = {
            x: x_axis,
            y: y_axis,
            text: text,
            type: "bar",
            orientation: "h",
        };

        const layout = {
            margin: {
                l: 100,
                r: 100,
                t: 0,
                b: 100,
            },
            height: 500,
            width: 600,
        };

        Plotly.newPlot("bar", [barChart], layout);
    }

    function bubbleChart(selectedID) {
        let x_axis = selectedID.otu_ids;
        let y_axis = selectedID.sample_values;
        let marker_size = selectedID.sample_values;
        let color = selectedID.otu_ids;
        let text = selectedID.otu_labels;

        const bubble = {
            x: x_axis,
            y: y_axis,
            text: text,
            mode: "markers",
            marker: {
                color: color,
                colorscale: "Blue", // Note: Corrected the colorscale name
                size: marker_size,
            },
            type: "scatter",
        };

        const layout = {
            xaxis: {
                title: { text: "OTU ID" },
            },
        };

        Plotly.newPlot("bubble", [bubble], layout);
    }
});
