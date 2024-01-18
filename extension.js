// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	// let disposable = vscode.commands.registerCommand('code-formatter.helloWorld', function () {
		// vscode.window.showInformationMessage('Hello World from code-formatter!');
	// });


	const printHighlightedText = vscode.commands.registerCommand('code-formatter.printHighlightedText', function() {
		const editor = vscode.window.activeTextEditor;
		const selection = editor.selection;

		if (selection && !selection.isEmpty) {
			const selectionRange = new vscode.Range(selection.start.line, selection.start.character, selection.end.line, selection.end.character);
			const highlighted = editor.document.getText(selectionRange);

			vscode.window.showInformationMessage(highlighted);
		} else {
			vscode.window.showErrorMessage('Не выделен текст, блин(')
		}
	})

	context.subscriptions.push(
		disposable,
		printHighlightedText
	);
}

// This method is called when your extension is deactivated
function deactivate() {

}

module.exports = {
	activate,
	deactivate
}
