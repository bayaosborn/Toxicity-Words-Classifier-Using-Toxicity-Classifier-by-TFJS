#Toxicity-Words-Classifier-Using-Toxicity-Classifier-by-TFJS
In this article, we'll explore a web application that uses Google's Toxicity Classifier to classify user input as toxic or non-toxic. The web application is built using HTML, CSS, and JavaScript, and utilizes the Toxicity Classifier library provided by Google.

The Toxicity Classifier library is a machine learning model that is trained to identify toxic language in text. The model is trained on a large dataset of toxic and non-toxic language, and is able to identify various types of toxicity, such as insults, threats, and profanity.

To use the Toxicity Classifier library in a web application, we first need to load the library using the provided JavaScript API. We do this by creating a constant c that represents the confidence threshold for classifying text as toxic. We then use the toxicity.load() function to load the Toxicity Classifier library with the given confidence threshold. The loaded model is stored in a model variable, which we can use to classify user input.

Next, we create an HTML form that allows users to enter text that they would like to classify. The form includes a text input field and a submit button. We use JavaScript to capture the user input and prevent the form from being submitted in the traditional way, as we want to classify the text without refreshing the page.

Once the user input is captured, we use the model.classify() function to classify the text. The function returns a set of predictions, each representing a different type of toxicity that the model has been trained to identify. We iterate over the predictions using the predictions.forEach() function.

For each prediction, we check if the match property of the first result in the results array is true. If it is, we push the prediction object to an array called mE, which stores all the predictions that match the user input. If none of the predictions match the user input, we set the inner text of a has element to "Answer is clean.", indicating that the user input is not toxic.

If any of the predictions match the user input, we set the inner text of the has element to "Answer is/has:", indicating that the user input contains some form of toxicity. We then create a p element for each prediction in the mE array, setting the inner text of each p element to the label of the corresponding prediction. We append each p element to an ans element, which displays the list of toxic labels for the user input.

Overall, this web application provides a simple and easy-to-use interface for classifying user input as toxic or non-toxic. By utilizing Google's Toxicity Classifier library, the application is able to identify a wide range of toxic language and provide helpful feedback to users.
