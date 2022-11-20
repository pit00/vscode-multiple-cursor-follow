"use strict";
import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
    let disposable;
    
    disposable = vscode.commands.registerCommand("multiple-cursor-follow.bottom", () => {
        toBottom();
    });
    
    disposable = vscode.commands.registerCommand("multiple-cursor-follow.topper", () => {
        toTop();
    });

    context.subscriptions.push(disposable);
}

async function toTop() {
    let temp = []
    for(let index = 0; index < vscode.window.activeTextEditor.selections.length; index++){
        temp[index] = Object.values(vscode.window.activeTextEditor.selections[index]['anchor'])
    };
    let value = [...temp].sort((a, b) => a[0] - b[0] || a[1] - b[1])
    let topper = value[0][0]

    await vscode.commands.executeCommand("revealLine", {
        lineNumber: topper,
        at: "top"
    });
}

async function toBottom() {
    let temp = []
    for(let index = 0; index < vscode.window.activeTextEditor.selections.length; index++){
        temp[index] = Object.values(vscode.window.activeTextEditor.selections[index]['anchor'])
    };
    let value = [...temp].sort((a, b) => a[0] - b[0] || a[1] - b[1])
    let bottom = value[temp.length - 1][0]

    await vscode.commands.executeCommand("revealLine", {
        lineNumber: bottom,
        at: "bottom"
    });
}

export function deactivate() {}
