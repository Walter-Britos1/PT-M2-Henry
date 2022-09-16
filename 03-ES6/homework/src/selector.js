var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if (matchFunc(startEl)) {
     resultSet.push(startEl);
  }
  for (let i = 0; i < startEl.children.length; i++) {
    let hijo = startEl.children[i];
    let resultado = traverseDomAndCollectElements(matchFunc, hijo);
    resultSet = [...resultSet,... resultado]
  }
  return resultSet
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
 
  for (let i = 1; i < selector.length; i++) {
     if(selector[i]=== ".")
     return'tag.class'
  }

  if (selector[0] === "#") {
    return 'id';
  }
  
  if (selector[0] === ".") {
    return 'class';
  }else {
    return "tag"
  }

};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 
    matchFunction = function (elemento) {
      return "#" + elemento.id === selector
    }  
  } else if (selectorType === "class") {
    matchFunction = elemento => {
      let clases = elemento.classList
      for (let i = 0; i < clases.length; i++) {
         if ("." + clases[i] === selector) {
          return true;
         }
      }
      return false; 
    }
  
  } else if (selectorType === "tag.class") {
    matchFunction = elemento => {
      let [tags, clases] = selector.split(".")
     return matchFunctionMaker(tags)(elemento) && matchFunctionMaker("." + clases)(elemento) 
    }
  
  } else if (selectorType === "tag") {
    matchFunction = elemeto => elemeto.tagName === selector.toUpperCase()
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
