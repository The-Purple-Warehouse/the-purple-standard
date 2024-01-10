const fs = require("fs");
let header = [];
header.push("# Reference");
header.push("");
header.push("## Table of Contents");
header.push("- [Interfaces](#interfaces)");
header.push("- [Properties](#properties)");
let doc = [];
doc.push("## Interfaces");
let interfaceFiles = fs.readdirSync("./interfaces").filter(file => file.toLowerCase().endsWith(".md"));
let interfaces = [];
for(let i = 0; i < interfaceFiles.length; i++) {
	let file = fs.readFileSync(`./interfaces/${interfaceFiles[i]}`, {encoding: "utf8"});
	let lines = file.split("\n");
	let filename = interfaceFiles[i];
	let name = interfaceFiles[i].split(".")[0];
	let definition = [];
	let examples = [];
	let index = 0;
	while(!lines[index].toLowerCase().replaceAll(" ", "").startsWith("##definition")) {
		index++;
	}
	index++;
	while(index < lines.length && !lines[index].startsWith("##")) {
		definition.push(lines[index]);
		index++;
	}
	while(definition[definition.length - 1] == "") {
		definition.pop();
	}
	while(!lines[index].toLowerCase().replaceAll(" ", "").startsWith("##examples")) {
		index++;
	}
	index++;
	while(index < lines.length && !lines[index].startsWith("##")) {
		examples.push(lines[index]);
		index++;
	}
	while(examples[examples.length - 1] == "") {
		examples.pop();
	}
	interfaces.push({
		filename: filename,
		name: name,
		definition: definition.join("\n"),
		examples: examples.join("\n"),
	});
}
interfaces = interfaces.sort((a, b) => a.name.localeCompare(b.name));
let table = [];
table.push(`| name | definition | examples |`);
table.push(`|---|---|---|`);
function tableFormat(text) {
	let lines = text.split("\n");
	for(let i = 0; i < lines.length; i++) {
		if(lines[i].startsWith("-")) {
			lines[i] = `<ul><li>${lines[i].substring(1).trim()}</li></ul>`;
		}
	}
	return lines.join("<br>").replaceAll("</ul><br><ul>", "").replaceAll("</ul><br>", "</ul>");
}
for(let i = 0; i < interfaces.length; i++) {
	header.push(`	- [${interfaces[i].name}](#${interfaces[i].name})`);
	table.push(`| [${interfaces[i].name}](/interfaces/${interfaces[i].filename}) | ${tableFormat(interfaces[i].definition)} | ${tableFormat(interfaces[i].examples)} |`);
}
doc.push(table.join("\n"));
doc.push("");
doc.push("## Properties");
for(let i = 0; i < interfaces.length; i++) {
	doc.push("");
	doc.push(`### ${interfaces[i].name}`);
	let propertyFiles = fs.readdirSync(`./properties/${interfaces[i].name}`).filter(file => file.toLowerCase().endsWith(".md"));
	let properties = [];
	for(let j = 0; j < propertyFiles.length; j++) {
		let file = fs.readFileSync(`./properties/${interfaces[i].name}/${propertyFiles[j]}`, {encoding: "utf8"});
		let lines = file.split("\n");
		let filename = propertyFiles[j];
		let name = propertyFiles[j].split(".")[0];
		let definition = [];
		let values = [];
		let index = 0;
		while(!lines[index].toLowerCase().replaceAll(" ", "").startsWith("##definition")) {
			index++;
		}
		index++;
		while(index < lines.length && !lines[index].startsWith("##")) {
			definition.push(lines[index]);
			index++;
		}
		while(definition[definition.length - 1] == "") {
			definition.pop();
		}
		while(!lines[index].toLowerCase().replaceAll(" ", "").startsWith("##values")) {
			index++;
		}
		index++;
		while(index < lines.length && !lines[index].startsWith("##")) {
			values.push(lines[index]);
			index++;
		}
		while(values[values.length - 1] == "") {
			values.pop();
		}
		properties.push({
			filename: filename,
			name: name,
			definition: definition.join("\n"),
			values: values.join("\n"),
		});
	}
	properties = properties.sort((a, b) => a.name.localeCompare(b.name));
	let table = [];
	table.push(`| name | definition | values |`);
	table.push(`|---|---|---|`);
	for(let j = 0; j < properties.length; j++) {
		table.push(`| [${tableFormat(properties[j].name)}](/properties/${interfaces[i].name}/${properties[j].filename}) | ${tableFormat(properties[j].definition)} | ${tableFormat(properties[j].values)} |`);
	}
	doc.push(table.join("\n"));
}
header.push("")
fs.writeFileSync("./reference.md", [...header, ...doc].join("\n"));