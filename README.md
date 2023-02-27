# Frontend

## React Curriculum vitae

## Steps
<details>
<summary>Create the project components #1: Analyze the project and identify its structure</summary>
&nbsp;&nbsp;&nbsp;The first thing I did was create all the files inside the APP.js file then I modified the location of the "About"component and started to create he whole structure to fit the test, finally, I had to modify some test to be relative to my information, for example the languajes, the original test are set to found more that 2 items, but as I only have 2 languages I modified to seek for more that 1 item.
</details>
<br>
<details>
<summary>Add styles #2: Create the styles to give it the desired design, keep the proposed structure.</summary>
&nbsp;&nbsp;&nbsp; I create all the syles in a general file named "App.styl" it's the default from the repositorie, I decided to create all the styles from scratch and try to make it simple and just fit the proposed structure without anything super elaborated.
</details>

___
## Troubleshooting
1. When I tried to execute the projet with nodejs v18 I get the error [ERR_OSSL_EVP_UNSUPPORTED](https://stackoverflow.com/questions/69394632/webpack-build-failing-with-err-ossl-evp-unsupported) so I had to downgrade to v16.3.0 with [nmv](https://github.com/nvm-sh/nvm).
2. For the fourth task I also had to modify the test because when I consume the API I create all the items recursively with the map property every time I use and array and as I used function components the first time it loads the props all the info are null so it doesn't load the items.