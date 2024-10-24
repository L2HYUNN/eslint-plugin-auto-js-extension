module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Ensure all JavaScript files have a .js extension",
      category: "Stylistic Issues",
      recommended: false,
    },
    fixable: "code",
    schema: [],
  },
  create(context) {
    const sourceCode = context.sourceCode.text ?? context.getSourceCode().text;

    return {
      ImportDeclaration(node) {
        if (
          node.source.type === "Literal" &&
          !node.source.value.startsWith("@") &&
          !node.source.value.endsWith(".js")
        ) {
          context.report({
            node,
            message: "File should have a .js extension.",
            fix: (fixer) => {
              const prev = sourceCode.split(node.source.raw)[0];

              if (node.source.raw.startsWith('"')) {
                return fixer.replaceText(
                  node,
                  `${prev}"${node.source.value}.js"`
                );
              }

              if (node.source.raw.startsWith("'")) {
                return fixer.replaceText(
                  node,
                  `${prev}'${node.source.value}.js'`
                );
              }
            },
          });
        }
      },
      ExportAllDeclaration(node) {
        if (
          node.source.type === "Literal" &&
          !node.source.value.startsWith("@") &&
          !node.source.value.endsWith(".js")
        ) {
          context.report({
            node,
            message: "File should have a .js extension.",
            fix: (fixer) => {
              const prev = sourceCode.split(node.source.raw)[0];

              if (node.source.raw.startsWith('"')) {
                return fixer.replaceText(
                  node,
                  `${prev}"${node.source.value}.js"`
                );
              }

              if (node.source.raw.startsWith("'")) {
                return fixer.replaceText(
                  node,
                  `${prev}'${node.source.value}.js'`
                );
              }
            },
          });
        }
      },
    };
  },
};
