"use strict";
import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
    let disposable;
    
    disposable = vscode.commands.registerCommand("cursor-view-focus.mainBottom", () => {
        toMainBottom();
    });
    
    disposable = vscode.commands.registerCommand("cursor-view-focus.mainCenter", () => {
        toMainCenter();
    });

    disposable = vscode.commands.registerCommand("cursor-view-focus.mainTop", () => {
        toMainTop();
    });
    
    disposable = vscode.commands.registerCommand("cursor-view-focus.recentBottom", () => {
        toRecentBottom();
    });
    
    disposable = vscode.commands.registerCommand("cursor-view-focus.recentCenter", () => {
        toRecentCenter();
    });
    
    disposable = vscode.commands.registerCommand("cursor-view-focus.recentTop", () => {
        toRecentTop();
    });
    
    disposable = vscode.commands.registerCommand("cursor-view-focus.firstBottom", () => {
        toFirstBottom();
    });
    
    disposable = vscode.commands.registerCommand("cursor-view-focus.firstCenter", () => {
        toFirstCenter();
    });
    
    disposable = vscode.commands.registerCommand("cursor-view-focus.firstTop", () => {
        toFirstTop();
    });
    
    disposable = vscode.commands.registerCommand("cursor-view-focus.finalBottom", () => {
        toFinalBottom();
    });
    
    disposable = vscode.commands.registerCommand("cursor-view-focus.finalCenter", () => {
        toFinalCenter();
    });
    
    disposable = vscode.commands.registerCommand("cursor-view-focus.finalTop", () => {
        toFinalTop();
    });

    context.subscriptions.push(disposable);
}

async function toMainBottom() {
    let currentLineNumber = vscode.window.activeTextEditor.selection.start.line;
    await vscode.commands.executeCommand("revealLine", {
        lineNumber: currentLineNumber,
        at: "bottom"
    });
}

async function toMainCenter() {
    let currentLineNumber = vscode.window.activeTextEditor.selection.start.line;
    await vscode.commands.executeCommand("revealLine", {
        lineNumber: currentLineNumber,
        at: "center"
    });
}

async function toMainTop() {
    let currentLineNumber = vscode.window.activeTextEditor.selection.start.line;
    await vscode.commands.executeCommand("revealLine", {
        lineNumber: currentLineNumber,
        at: "top"
    });
}

async function toRecentBottom() {
    let recent = vscode.window.activeTextEditor.selections.length
    let currentLineNumber = vscode.window.activeTextEditor.selections[recent - 1].start.line;
    await vscode.commands.executeCommand("revealLine", {
        lineNumber: currentLineNumber,
        at: "bottom"
    });
}

async function toRecentCenter() {
    let currentLineNumber = vscode.window.activeTextEditor.selection.start.line;
    await vscode.commands.executeCommand("revealLine", {
        lineNumber: currentLineNumber,
        at: "center"
    });
}

async function toRecentTop() {
    let currentLineNumber = vscode.window.activeTextEditor.selection.start.line;
    await vscode.commands.executeCommand("revealLine", {
        lineNumber: currentLineNumber,
        at: "top"
    });
}

async function toFirstBottom() {
    let temp = []
    for(let index = 0; index < vscode.window.activeTextEditor.selections.length; index++){
        temp[index] = Object.values(vscode.window.activeTextEditor.selections[index]['anchor'])
    };
    let value = [...temp].sort((a, b) => a[0] - b[0] || a[1] - b[1])
    let first = value[0][0]
    
    await vscode.commands.executeCommand("revealLine", {
        lineNumber: first,
        at: "bottom"
    });
}

async function toFirstCenter() {
    let temp = []
    for(let index = 0; index < vscode.window.activeTextEditor.selections.length; index++){
        temp[index] = Object.values(vscode.window.activeTextEditor.selections[index]['anchor'])
    };
    let value = [...temp].sort((a, b) => a[0] - b[0] || a[1] - b[1])
    let first = value[0][0]
    
    await vscode.commands.executeCommand("revealLine", {
        lineNumber: first,
        at: "center"
    });
}

async function toFirstTop() {
    let temp = []
    for(let index = 0; index < vscode.window.activeTextEditor.selections.length; index++){
        temp[index] = Object.values(vscode.window.activeTextEditor.selections[index]['anchor'])
    };
    let value = [...temp].sort((a, b) => a[0] - b[0] || a[1] - b[1])
    let first = value[0][0]
    
    await vscode.commands.executeCommand("revealLine", {
        lineNumber: first,
        at: "top"
    });
}

async function toFinalBottom() {
    let temp = []
    for(let index = 0; index < vscode.window.activeTextEditor.selections.length; index++){
        temp[index] = Object.values(vscode.window.activeTextEditor.selections[index]['anchor'])
    };
    let value = [...temp].sort((a, b) => a[0] - b[0] || a[1] - b[1])
    let final = value[temp.length - 1][0]
    
    await vscode.commands.executeCommand("revealLine", {
        lineNumber: final,
        at: "bottom"
    });
}

async function toFinalCenter() {
    let temp = []
    for(let index = 0; index < vscode.window.activeTextEditor.selections.length; index++){
        temp[index] = Object.values(vscode.window.activeTextEditor.selections[index]['anchor'])
    };
    let value = [...temp].sort((a, b) => a[0] - b[0] || a[1] - b[1])
    let final = value[temp.length - 1][0]
    
    await vscode.commands.executeCommand("revealLine", {
        lineNumber: final,
        at: "center"
    });
}

async function toFinalTop() {
    let temp = []
    for(let index = 0; index < vscode.window.activeTextEditor.selections.length; index++){
        temp[index] = Object.values(vscode.window.activeTextEditor.selections[index]['anchor'])
    };
    let value = [...temp].sort((a, b) => a[0] - b[0] || a[1] - b[1])
    let final = value[temp.length - 1][0]
    
    await vscode.commands.executeCommand("revealLine", {
        lineNumber: final,
        at: "top"
    });
}

export function deactivate() {}
