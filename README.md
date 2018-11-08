# MSU Forestry App For Wood Quality Analysis
## First Code Commit: 12/01/2017
## Last Code Commit: 2/02/2017

This is an Ionic app I developed for the Forestry Dept at MSU. It was discontinued after it was determined Ionic was not a reasonable choice for the native hardware requirements of the application.

The app was designed to measure the strength of cut timber by analyzing the frequency that it vibrated at. The phone is laid on a cut piece of timber that is supported between two saw horses. The timber is hit with a hammer and vibrates. The phone app picks up the vibrations and performs a Fourier transform on the signal. This results in the strength of the vibrational frequencies being displayed and analyized.

The project was scrapped after concluding that it was too difficult to get good sample data using Ionic and a Swift implementation should be pursued. The sample rate for Fourier Transforms must be exact between measurements or the transform will not work. With Ionic, the timing for the sample rate of the data was too inconsistent and would not result in an accurate transform.

