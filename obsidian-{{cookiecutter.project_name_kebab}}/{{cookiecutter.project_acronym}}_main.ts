import { Editor, EditorPosition, MarkdownView, Plugin } from 'obsidian';

export default class {{cookiecutter.project_name_pascal}}Plugin extends Plugin {
	async onload() {
		this.addCommand({
			id: 'anselmwang-test-command',
			name: 'Anselm Wang Test Command',
			icon: 'pencil',
			hotkeys: [{modifiers: ['Ctrl', 'Shift'], key: '2'}],
			editorCallback: (editor: Editor, view: MarkdownView) => {
				console.log(editor.getCursor());
			}
		});
		console.log("{{cookiecutter.project_name_pascal}}Plugin load successfully.")
	}

	onunload() {

	}

}
