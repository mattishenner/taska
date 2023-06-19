// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"9U7b9":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "1dc48d5ad47e1912";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"h9tGv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _firestore = require("firebase/firestore");
var _appJs = require("./app.js");
var _auth = require("@firebase/auth");
var _sortablejs = require("sortablejs");
var _sortablejsDefault = parcelHelpers.interopDefault(_sortablejs);
var _en = require("hyphen/en");
var _tinygesture = require("tinygesture");
var _tinygestureDefault = parcelHelpers.interopDefault(_tinygesture);
//Loading 
const loader = document.querySelector(".load-container");
(0, _auth.onAuthStateChanged)((0, _appJs.auth), async (user)=>{
    if (user) {
        const newTaskInput = document.getElementById("new-task-input");
        const newTaskBtn = document.getElementById("new-task-btn");
        const taskList = document.querySelector(".task-list");
        const prioritySlider = document.getElementById("priority-slider");
        const prioritySwitch = document.getElementById("priority-checkbox");
        const priorityOptionsContainer = document.getElementById("priority-options");
        const lowPriorityCheckbox = document.getElementById("low-priority");
        const mediumPriorityCheckbox = document.getElementById("medium-priority");
        const highPriorityCheckbox = document.getElementById("high-priority");
        const updateTaskBtn = document.getElementById("update-task-btn");
        let currentlyEdditingTaskId = null;
        //To do list
        let taskArray = [];
        //First login - welcome tasks
        const userDoc = (0, _firestore.doc)((0, _appJs.db), "users", (0, _appJs.auth).currentUser.uid);
        const userDocSnapshot = await (0, _firestore.getDoc)(userDoc);
        if (!userDocSnapshot.data().hasBeenWelcomed) {
            await addWelcomeTasks();
            await (0, _firestore.updateDoc)(userDoc, {
                hasBeenWelcomed: true
            });
        }
        async function addWelcomeTasks() {
            const welcomTasks = [
                {
                    task: "Tap a task to mark it as complete",
                    done: false,
                    completedDate: null,
                    priority: 0,
                    index: 0
                },
                {
                    task: "Swipe right to reveal edit button",
                    done: false,
                    completedDate: null,
                    priority: 0,
                    index: 1
                },
                {
                    task: "Swipe left to revel remove button",
                    done: false,
                    completedDate: null,
                    priority: 0,
                    index: 2
                },
                {
                    task: "Completed tasks dissapear after 12 hours",
                    done: false,
                    completedDate: null,
                    priority: 0,
                    index: 3
                },
                {
                    task: "Tap logo for a good time",
                    done: false,
                    completedDate: null,
                    priority: 0,
                    index: 4
                }
            ];
            const taskCollection = (0, _firestore.collection)((0, _appJs.db), "users", (0, _appJs.auth).currentUser.uid, "tasks");
            const batch = (0, _firestore.writeBatch)((0, _appJs.db));
            for (let task of welcomTasks){
                const docRef = (0, _firestore.doc)(taskCollection);
                batch.set(docRef, task);
                task.id = docRef.id;
            }
            await batch.commit();
            taskArray = [
                ...welcomTasks,
                ...taskArray
            ];
        }
        //Get tasks from firestore
        async function getTasks() {
            loader.classList.remove("hidden");
            const taskQuery = (0, _firestore.query)((0, _firestore.collection)((0, _appJs.db), "users", (0, _appJs.auth).currentUser.uid, "tasks"), (0, _firestore.orderBy)("index"));
            const taskSnapshot = await (0, _firestore.getDocs)(taskQuery);
            taskArray = taskSnapshot.docs.map((doc)=>{
                let data = doc.data();
                return {
                    id: doc.id,
                    ...data,
                    completedDate: data.completedDate ? data.completedDate.toDate() : null
                };
            });
            loader.classList.add("hidden");
        }
        //Remove old tasks
        async function removeOldTasks() {
            const now = new Date();
            const tasksToRemove = [];
            for (let task of taskArray)if (task.done && task.completedDate) {
                const completedDate = new Date(task.completedDate);
                const hoursSinceCompletion = (now - completedDate) / 3600000;
                if (hoursSinceCompletion >= 12) tasksToRemove.push(task);
            }
            for (let task of tasksToRemove){
                const taskDoc = (0, _firestore.doc)((0, _appJs.db), "users", (0, _appJs.auth).currentUser.uid, "tasks", task.id);
                await (0, _firestore.deleteDoc)(taskDoc);
                const index = taskArray.indexOf(task);
                if (index !== -1) taskArray.splice(index, 1);
            }
            renderTasks();
        }
        //Render tasks
        function renderTasks() {
            taskList.innerHTML = "";
            taskArray.forEach((task)=>{
                const container = document.createElement("div");
                const li = document.createElement("li");
                li.id = task.id;
                const innerText = document.createElement("p");
                container.classList.add("task-container");
                innerText.innerText = task.task;
                if (task.done) {
                    innerText.classList.add("done");
                    li.classList.add("done");
                }
                if (task.priority === 3) li.classList.add("high-priority");
                else if (task.priority === 2) li.classList.add("medium-priority");
                else if (task.priority === 1) li.classList.add("low-priority");
                else if (task.priority === 0) li.classList.add("no-priority");
                //Edit task
                const editBtn = document.createElement("h4");
                editBtn.innerText = "Edit";
                editBtn.classList.add("edit-btn");
                editBtn.addEventListener("click", (event)=>{
                    event.stopPropagation();
                    openInputArea();
                    newTaskInput.value = task.task;
                    prioritySlider.value = task.priority;
                    newTaskBtn.classList.add("hidden");
                    updateTaskBtn.classList.add("show");
                    currentlyEdditingTaskId = task.id;
                    //Open priority options if task has priority
                    let taskToUpdate = taskArray.find((task)=>task.id === currentlyEdditingTaskId);
                    if (taskToUpdate && taskToUpdate.priority !== 0) {
                        prioritySwitch.checked = true;
                        prioritySlider.value = taskToUpdate.priority;
                        priorityOptionsContainer.classList.remove("inactive");
                        switch(taskToUpdate.priority){
                            case 1:
                                lowPriorityCheckbox.checked = true;
                                break;
                            case 2:
                                mediumPriorityCheckbox.checked = true;
                                break;
                            case 3:
                                highPriorityCheckbox.checked = true;
                                break;
                        }
                    } else if (taskToUpdate && taskToUpdate.priority === 0) {
                        prioritySwitch.checked = false;
                        priorityOptionsContainer.classList.add("inactive");
                        prioritySlider.value = 0;
                        lowPriorityCheckbox.checked = false;
                        mediumPriorityCheckbox.checked = false;
                        highPriorityCheckbox.checked = false;
                    }
                });
                //Delete task
                const delBtn = document.createElement("h4");
                delBtn.innerText = "Remove";
                delBtn.classList.add("delete-btn");
                delBtn.addEventListener("click", (event)=>{
                    event.stopPropagation();
                    const taskRef = (0, _firestore.doc)((0, _appJs.db), "users", (0, _appJs.auth).currentUser.uid, "tasks", task.id);
                    const index = taskArray.indexOf(task);
                    if (index !== -1) taskArray.splice(index, 1);
                    renderTasks();
                    (0, _firestore.deleteDoc)(taskRef).catch((error)=>{
                        console.error("Error removing document: ", error);
                    });
                });
                container.appendChild(innerText);
                li.appendChild(editBtn);
                li.appendChild(delBtn);
                li.appendChild(container);
                taskList.appendChild(li);
                initSlider(container, li);
            });
        }
        //Update task
        updateTaskBtn.addEventListener("click", (event)=>{
            event.preventDefault();
            updateTask();
            openInputArea();
        });
        async function updateTask() {
            if (!currentlyEdditingTaskId) return;
            const taskRef = (0, _firestore.doc)((0, _appJs.db), "users", (0, _appJs.auth).currentUser.uid, "tasks", currentlyEdditingTaskId);
            //First update local task array
            let taskToUpdate = taskArray.find((task)=>task.id === currentlyEdditingTaskId);
            if (taskToUpdate) {
                taskToUpdate.task = newTaskInput.value;
                taskToUpdate.priority = Number(prioritySlider.value);
            }
            const batch = (0, _firestore.writeBatch)((0, _appJs.db));
            try {
                batch.update(taskRef, {
                    task: newTaskInput.value,
                    priority: Number(prioritySlider.value)
                });
                batch.commit(batch);
            } catch (error) {
                console.log(error);
            }
            renderTasks();
            currentlyEdditingTaskId = null;
        }
        //Create new task
        newTaskBtn?.addEventListener("click", async (event)=>{
            event.preventDefault();
            let newTaskText = (0, _en.hyphenateSync)(newTaskInput.value);
            const newTask = {
                task: newTaskText,
                done: false,
                completedDate: null,
                priority: Number(prioritySlider.value),
                index: taskArray.length
            };
            //add new document to firestore
            try {
                const taskCollection = (0, _firestore.collection)((0, _appJs.db), "users", (0, _appJs.auth).currentUser.uid, "tasks");
                const docRef = await (0, _firestore.addDoc)(taskCollection, newTask);
                newTask.id = docRef.id;
                taskArray.push(newTask);
                renderTasks();
                newTaskInput.value = "";
            } catch (error) {
                console.error("Error adding document: ", error);
            }
        });
        //Initialize list
        async function init() {
            await getTasks();
            removeOldTasks();
            renderTasks();
            setInterval(removeOldTasks, 1800000);
        }
        init();
        //Open and close input area
        const plusBtn = document.querySelector(".plus-btn");
        const inputArea = document.querySelector(".input-area");
        let inputAreaOpen = false;
        function openInputArea() {
            updateTaskBtn.classList.remove("show");
            newTaskBtn.classList.remove("hidden");
            inputAreaOpen = !inputAreaOpen;
            inputArea.classList.toggle("show");
            if (inputAreaOpen === true) newTaskInput.focus();
            else {
                newTaskInput.blur();
                newTaskInput.value = "";
            }
            plusBtn.classList.toggle("rotate");
        }
        plusBtn.addEventListener("click", ()=>{
            openInputArea();
        });
        //Priorities
        prioritySwitch.addEventListener("change", ()=>{
            if (prioritySwitch.checked) {
                priorityOptionsContainer.classList.remove("inactive");
                prioritySlider.value = 2;
                mediumPriorityCheckbox.checked = true;
            } else {
                priorityOptionsContainer.classList.add("inactive");
                prioritySlider.value = 0;
                lowPriorityCheckbox.checked = false;
                mediumPriorityCheckbox.checked = false;
                highPriorityCheckbox.checked = false;
            }
        });
        lowPriorityCheckbox.addEventListener("click", ()=>{
            prioritySlider.value = 1;
        });
        mediumPriorityCheckbox.addEventListener("click", ()=>{
            prioritySlider.value = 2;
        });
        highPriorityCheckbox.addEventListener("click", ()=>{
            prioritySlider.value = 3;
        });
        //Update index of tasks function
        async function updateIndex() {
            const newTaskArray = [];
            const idArray = sortable.toArray();
            idArray.forEach((id)=>{
                const task = taskArray.find((task)=>task.id === id);
                newTaskArray.push(task);
            });
            taskArray = newTaskArray;
            const batch = (0, _firestore.writeBatch)((0, _appJs.db)); // initiate batch        
            taskArray.forEach((task, index)=>{
                const taskRef = (0, _firestore.doc)((0, _appJs.db), "users", (0, _appJs.auth).currentUser.uid, "tasks", task.id);
                batch.update(taskRef, {
                    index
                }); // queue updates
            });
            await batch.commit(); // commit all updates in a single request
        }
        //Sortable
        const taskListEl = document.querySelector(".task-list");
        let sortable = (0, _sortablejsDefault.default).create(taskListEl, {
            delay: 300,
            animation: 150,
            sort: true,
            dataIdAttr: "id",
            easing: "cubic-bezier(1, 0, 0, 1)",
            onEnd: updateIndex
        });
        //Gesture controle
        function initSlider(target, li) {
            const gesture = new (0, _tinygestureDefault.default)(target);
            let startTime;
            const minSwipeTime = 200;
            let swiped = false;
            let startOffset = 0;
            const decelerationOnOverflow = 4;
            const revealWidth = 83;
            const revealWidthLeft = 54;
            const snapWidth = revealWidth / 1.5;
            let swipeDirection = "neutral";
            let position = "neutral";
            let newX = startOffset;
            // Modify the 'panstart' event.
            gesture.on("panstart", ()=>{
                startTime = new Date().getTime(); // Set the start time when a pan starts.
            });
            // Modify the 'tap' event to prevent it from triggering after a swipe.
            gesture.on("tap", (event)=>{
                const endTime = new Date().getTime();
                const elapsedTime = endTime - startTime;
                // Only reset if this was a tap, not a swipe.
                if (elapsedTime < minSwipeTime) window.requestAnimationFrame(()=>{
                    target.style.transition = "transform .2s ease-in";
                    swiped = false;
                    startOffset = 0;
                    target.style.transform = null;
                });
            });
            //Swipe gestures
            gesture.on("panmove", ()=>{
                function getX(x) {
                    if (x < revealWidth && x > -revealWidth) {
                        swipeDirection = x < 0 ? "left" : "right";
                        return x;
                    }
                    if (x < -revealWidth) {
                        swipeDirection = "left";
                        return (x + revealWidth) / decelerationOnOverflow - revealWidth;
                    }
                    if (x > revealWidthLeft) {
                        swipeDirection = "right";
                        return (x - revealWidthLeft) / decelerationOnOverflow + revealWidthLeft;
                    }
                    return 0;
                }
                newX = getX(startOffset + gesture.touchMoveX);
                target.style.transform = "translateX(" + newX + "px)";
                if (newX >= snapWidth || newX <= -snapWidth) swiped = newX < 0 ? -revealWidth : revealWidthLeft;
                target.style.transition = null;
            });
            gesture.on("panend", ()=>{
                const endTime = new Date().getTime(); // Get the end time when a pan ends.
                const elapsedTime = endTime - startTime; // Calculate elapsed time.
                let swipeDirection = gesture.touchMoveX < 0 ? "left" : "right";
                target.style.transition = "transform .2s ease-in";
                if (!swiped) {
                    startOffset = 0;
                    target.style.transform = null;
                    position = "neutral";
                } else if (swipeDirection === "left" && position === "right") {
                    startOffset = 0;
                    target.style.transform = null;
                    position = "neutral";
                } else if (swipeDirection === "right" && position === "left") {
                    startOffset = 0;
                    target.style.transform = null;
                    position = "neutral";
                } else {
                    startOffset = swiped;
                    target.style.transform = "translateX(" + swiped + "px)";
                    position = swipeDirection === "left" ? "left" : "right";
                }
                if (!swiped) {
                    startOffset = 0;
                    swipeDirection = "neutral";
                }
            });
            // reset on tap
            gesture.on("tap", async (event)=>{
                swipeDirection = 0;
                const endTime = new Date().getTime();
                const elapsedTime = endTime - startTime;
                if (elapsedTime < minSwipeTime && swiped === false) {
                    const task = taskArray.find((task)=>task.id === li.id);
                    if (task) {
                        task.done = !task.done;
                        renderTasks();
                        if (task.done) {
                            task.completedDate = new Date();
                            const taskRef = (0, _firestore.doc)((0, _appJs.db), "users", (0, _appJs.auth).currentUser.uid, "tasks", task.id);
                            await (0, _firestore.updateDoc)(taskRef, {
                                done: task.done,
                                completedDate: task.completedDate
                            });
                        } else {
                            task.completedDate = null;
                            const taskRef = (0, _firestore.doc)((0, _appJs.db), "users", (0, _appJs.auth).currentUser.uid, "tasks", task.id);
                            await (0, _firestore.updateDoc)(taskRef, {
                                done: task.done,
                                completedDate: task.completedDate
                            });
                        }
                    }
                }
                target.style.transition = "transform .2s ease-in";
                swiped = false;
                startOffset = 0;
                target.style.transform = null;
            });
        }
    }
});

},{"firebase/firestore":"8A4BC","./app.js":"igcvL","@firebase/auth":"khbwD","sortablejs":"4mik1","hyphen/en":"9KDn5","tinygesture":"hBvzf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4mik1":[function(require,module,exports) {
/**!
 * Sortable 1.15.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MultiDrag", ()=>MultiDragPlugin);
parcelHelpers.export(exports, "Sortable", ()=>Sortable);
parcelHelpers.export(exports, "Swap", ()=>SwapPlugin);
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread2(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function(obj) {
        return typeof obj;
    };
    else _typeof = function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var version = "1.15.0";
function userAgent(pattern) {
    if (typeof window !== "undefined" && window.navigator) return !!/*@__PURE__*/ navigator.userAgent.match(pattern);
}
var IE11OrLess = userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i);
var Edge = userAgent(/Edge/i);
var FireFox = userAgent(/firefox/i);
var Safari = userAgent(/safari/i) && !userAgent(/chrome/i) && !userAgent(/android/i);
var IOS = userAgent(/iP(ad|od|hone)/i);
var ChromeForAndroid = userAgent(/chrome/i) && userAgent(/android/i);
var captureMode = {
    capture: false,
    passive: false
};
function on(el, event, fn) {
    el.addEventListener(event, fn, !IE11OrLess && captureMode);
}
function off(el, event, fn) {
    el.removeEventListener(event, fn, !IE11OrLess && captureMode);
}
function matches(/**HTMLElement*/ el, /**String*/ selector) {
    if (!selector) return;
    selector[0] === ">" && (selector = selector.substring(1));
    if (el) try {
        if (el.matches) return el.matches(selector);
        else if (el.msMatchesSelector) return el.msMatchesSelector(selector);
        else if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
    } catch (_) {
        return false;
    }
    return false;
}
function getParentOrHost(el) {
    return el.host && el !== document && el.host.nodeType ? el.host : el.parentNode;
}
function closest(/**HTMLElement*/ el, /**String*/ selector, /**HTMLElement*/ ctx, includeCTX) {
    if (el) {
        ctx = ctx || document;
        do {
            if (selector != null && (selector[0] === ">" ? el.parentNode === ctx && matches(el, selector) : matches(el, selector)) || includeCTX && el === ctx) return el;
            if (el === ctx) break;
        /* jshint boss:true */ }while (el = getParentOrHost(el));
    }
    return null;
}
var R_SPACE = /\s+/g;
function toggleClass(el, name, state) {
    if (el && name) {
        if (el.classList) el.classList[state ? "add" : "remove"](name);
        else {
            var className = (" " + el.className + " ").replace(R_SPACE, " ").replace(" " + name + " ", " ");
            el.className = (className + (state ? " " + name : "")).replace(R_SPACE, " ");
        }
    }
}
function css(el, prop, val) {
    var style = el && el.style;
    if (style) {
        if (val === void 0) {
            if (document.defaultView && document.defaultView.getComputedStyle) val = document.defaultView.getComputedStyle(el, "");
            else if (el.currentStyle) val = el.currentStyle;
            return prop === void 0 ? val : val[prop];
        } else {
            if (!(prop in style) && prop.indexOf("webkit") === -1) prop = "-webkit-" + prop;
            style[prop] = val + (typeof val === "string" ? "" : "px");
        }
    }
}
function matrix(el, selfOnly) {
    var appliedTransforms = "";
    if (typeof el === "string") appliedTransforms = el;
    else do {
        var transform = css(el, "transform");
        if (transform && transform !== "none") appliedTransforms = transform + " " + appliedTransforms;
    /* jshint boss:true */ }while (!selfOnly && (el = el.parentNode));
    var matrixFn = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
    /*jshint -W056 */ return matrixFn && new matrixFn(appliedTransforms);
}
function find(ctx, tagName, iterator) {
    if (ctx) {
        var list = ctx.getElementsByTagName(tagName), i = 0, n = list.length;
        if (iterator) for(; i < n; i++)iterator(list[i], i);
        return list;
    }
    return [];
}
function getWindowScrollingElement() {
    var scrollingElement = document.scrollingElement;
    if (scrollingElement) return scrollingElement;
    else return document.documentElement;
}
/**
 * Returns the "bounding client rect" of given element
 * @param  {HTMLElement} el                       The element whose boundingClientRect is wanted
 * @param  {[Boolean]} relativeToContainingBlock  Whether the rect should be relative to the containing block of (including) the container
 * @param  {[Boolean]} relativeToNonStaticParent  Whether the rect should be relative to the relative parent of (including) the contaienr
 * @param  {[Boolean]} undoScale                  Whether the container's scale() should be undone
 * @param  {[HTMLElement]} container              The parent the element will be placed in
 * @return {Object}                               The boundingClientRect of el, with specified adjustments
 */ function getRect(el, relativeToContainingBlock, relativeToNonStaticParent, undoScale, container) {
    if (!el.getBoundingClientRect && el !== window) return;
    var elRect, top, left, bottom, right, height, width;
    if (el !== window && el.parentNode && el !== getWindowScrollingElement()) {
        elRect = el.getBoundingClientRect();
        top = elRect.top;
        left = elRect.left;
        bottom = elRect.bottom;
        right = elRect.right;
        height = elRect.height;
        width = elRect.width;
    } else {
        top = 0;
        left = 0;
        bottom = window.innerHeight;
        right = window.innerWidth;
        height = window.innerHeight;
        width = window.innerWidth;
    }
    if ((relativeToContainingBlock || relativeToNonStaticParent) && el !== window) {
        // Adjust for translate()
        container = container || el.parentNode; // solves #1123 (see: https://stackoverflow.com/a/37953806/6088312)
        // Not needed on <= IE11
        if (!IE11OrLess) {
            do if (container && container.getBoundingClientRect && (css(container, "transform") !== "none" || relativeToNonStaticParent && css(container, "position") !== "static")) {
                var containerRect = container.getBoundingClientRect(); // Set relative to edges of padding box of container
                top -= containerRect.top + parseInt(css(container, "border-top-width"));
                left -= containerRect.left + parseInt(css(container, "border-left-width"));
                bottom = top + elRect.height;
                right = left + elRect.width;
                break;
            }
            while (container = container.parentNode);
        }
    }
    if (undoScale && el !== window) {
        // Adjust for scale()
        var elMatrix = matrix(container || el), scaleX = elMatrix && elMatrix.a, scaleY = elMatrix && elMatrix.d;
        if (elMatrix) {
            top /= scaleY;
            left /= scaleX;
            width /= scaleX;
            height /= scaleY;
            bottom = top + height;
            right = left + width;
        }
    }
    return {
        top: top,
        left: left,
        bottom: bottom,
        right: right,
        width: width,
        height: height
    };
}
/**
 * Checks if a side of an element is scrolled past a side of its parents
 * @param  {HTMLElement}  el           The element who's side being scrolled out of view is in question
 * @param  {String}       elSide       Side of the element in question ('top', 'left', 'right', 'bottom')
 * @param  {String}       parentSide   Side of the parent in question ('top', 'left', 'right', 'bottom')
 * @return {HTMLElement}               The parent scroll element that the el's side is scrolled past, or null if there is no such element
 */ function isScrolledPast(el, elSide, parentSide) {
    var parent = getParentAutoScrollElement(el, true), elSideVal = getRect(el)[elSide];
    /* jshint boss:true */ while(parent){
        var parentSideVal = getRect(parent)[parentSide], visible = void 0;
        if (parentSide === "top" || parentSide === "left") visible = elSideVal >= parentSideVal;
        else visible = elSideVal <= parentSideVal;
        if (!visible) return parent;
        if (parent === getWindowScrollingElement()) break;
        parent = getParentAutoScrollElement(parent, false);
    }
    return false;
}
/**
 * Gets nth child of el, ignoring hidden children, sortable's elements (does not ignore clone if it's visible)
 * and non-draggable elements
 * @param  {HTMLElement} el       The parent element
 * @param  {Number} childNum      The index of the child
 * @param  {Object} options       Parent Sortable's options
 * @return {HTMLElement}          The child at index childNum, or null if not found
 */ function getChild(el, childNum, options, includeDragEl) {
    var currentChild = 0, i = 0, children = el.children;
    while(i < children.length){
        if (children[i].style.display !== "none" && children[i] !== Sortable.ghost && (includeDragEl || children[i] !== Sortable.dragged) && closest(children[i], options.draggable, el, false)) {
            if (currentChild === childNum) return children[i];
            currentChild++;
        }
        i++;
    }
    return null;
}
/**
 * Gets the last child in the el, ignoring ghostEl or invisible elements (clones)
 * @param  {HTMLElement} el       Parent element
 * @param  {selector} selector    Any other elements that should be ignored
 * @return {HTMLElement}          The last child, ignoring ghostEl
 */ function lastChild(el, selector) {
    var last = el.lastElementChild;
    while(last && (last === Sortable.ghost || css(last, "display") === "none" || selector && !matches(last, selector)))last = last.previousElementSibling;
    return last || null;
}
/**
 * Returns the index of an element within its parent for a selected set of
 * elements
 * @param  {HTMLElement} el
 * @param  {selector} selector
 * @return {number}
 */ function index(el, selector) {
    var index = 0;
    if (!el || !el.parentNode) return -1;
    /* jshint boss:true */ while(el = el.previousElementSibling)if (el.nodeName.toUpperCase() !== "TEMPLATE" && el !== Sortable.clone && (!selector || matches(el, selector))) index++;
    return index;
}
/**
 * Returns the scroll offset of the given element, added with all the scroll offsets of parent elements.
 * The value is returned in real pixels.
 * @param  {HTMLElement} el
 * @return {Array}             Offsets in the format of [left, top]
 */ function getRelativeScrollOffset(el) {
    var offsetLeft = 0, offsetTop = 0, winScroller = getWindowScrollingElement();
    if (el) do {
        var elMatrix = matrix(el), scaleX = elMatrix.a, scaleY = elMatrix.d;
        offsetLeft += el.scrollLeft * scaleX;
        offsetTop += el.scrollTop * scaleY;
    }while (el !== winScroller && (el = el.parentNode));
    return [
        offsetLeft,
        offsetTop
    ];
}
/**
 * Returns the index of the object within the given array
 * @param  {Array} arr   Array that may or may not hold the object
 * @param  {Object} obj  An object that has a key-value pair unique to and identical to a key-value pair in the object you want to find
 * @return {Number}      The index of the object in the array, or -1
 */ function indexOfObject(arr, obj) {
    for(var i in arr){
        if (!arr.hasOwnProperty(i)) continue;
        for(var key in obj){
            if (obj.hasOwnProperty(key) && obj[key] === arr[i][key]) return Number(i);
        }
    }
    return -1;
}
function getParentAutoScrollElement(el, includeSelf) {
    // skip to window
    if (!el || !el.getBoundingClientRect) return getWindowScrollingElement();
    var elem = el;
    var gotSelf = false;
    do // we don't need to get elem css if it isn't even overflowing in the first place (performance)
    if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
        var elemCSS = css(elem);
        if (elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == "auto" || elemCSS.overflowX == "scroll") || elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == "auto" || elemCSS.overflowY == "scroll")) {
            if (!elem.getBoundingClientRect || elem === document.body) return getWindowScrollingElement();
            if (gotSelf || includeSelf) return elem;
            gotSelf = true;
        }
    }
    while (elem = elem.parentNode);
    return getWindowScrollingElement();
}
function extend(dst, src) {
    if (dst && src) {
        for(var key in src)if (src.hasOwnProperty(key)) dst[key] = src[key];
    }
    return dst;
}
function isRectEqual(rect1, rect2) {
    return Math.round(rect1.top) === Math.round(rect2.top) && Math.round(rect1.left) === Math.round(rect2.left) && Math.round(rect1.height) === Math.round(rect2.height) && Math.round(rect1.width) === Math.round(rect2.width);
}
var _throttleTimeout;
function throttle(callback, ms) {
    return function() {
        if (!_throttleTimeout) {
            var args = arguments, _this = this;
            if (args.length === 1) callback.call(_this, args[0]);
            else callback.apply(_this, args);
            _throttleTimeout = setTimeout(function() {
                _throttleTimeout = void 0;
            }, ms);
        }
    };
}
function cancelThrottle() {
    clearTimeout(_throttleTimeout);
    _throttleTimeout = void 0;
}
function scrollBy(el, x, y) {
    el.scrollLeft += x;
    el.scrollTop += y;
}
function clone(el) {
    var Polymer = window.Polymer;
    var $ = window.jQuery || window.Zepto;
    if (Polymer && Polymer.dom) return Polymer.dom(el).cloneNode(true);
    else if ($) return $(el).clone(true)[0];
    else return el.cloneNode(true);
}
function setRect(el, rect) {
    css(el, "position", "absolute");
    css(el, "top", rect.top);
    css(el, "left", rect.left);
    css(el, "width", rect.width);
    css(el, "height", rect.height);
}
function unsetRect(el) {
    css(el, "position", "");
    css(el, "top", "");
    css(el, "left", "");
    css(el, "width", "");
    css(el, "height", "");
}
var expando = "Sortable" + new Date().getTime();
function AnimationStateManager() {
    var animationStates = [], animationCallbackId;
    return {
        captureAnimationState: function captureAnimationState() {
            animationStates = [];
            if (!this.options.animation) return;
            var children = [].slice.call(this.el.children);
            children.forEach(function(child) {
                if (css(child, "display") === "none" || child === Sortable.ghost) return;
                animationStates.push({
                    target: child,
                    rect: getRect(child)
                });
                var fromRect = _objectSpread2({}, animationStates[animationStates.length - 1].rect); // If animating: compensate for current animation
                if (child.thisAnimationDuration) {
                    var childMatrix = matrix(child, true);
                    if (childMatrix) {
                        fromRect.top -= childMatrix.f;
                        fromRect.left -= childMatrix.e;
                    }
                }
                child.fromRect = fromRect;
            });
        },
        addAnimationState: function addAnimationState(state) {
            animationStates.push(state);
        },
        removeAnimationState: function removeAnimationState(target) {
            animationStates.splice(indexOfObject(animationStates, {
                target: target
            }), 1);
        },
        animateAll: function animateAll(callback) {
            var _this = this;
            if (!this.options.animation) {
                clearTimeout(animationCallbackId);
                if (typeof callback === "function") callback();
                return;
            }
            var animating = false, animationTime = 0;
            animationStates.forEach(function(state) {
                var time = 0, target = state.target, fromRect = target.fromRect, toRect = getRect(target), prevFromRect = target.prevFromRect, prevToRect = target.prevToRect, animatingRect = state.rect, targetMatrix = matrix(target, true);
                if (targetMatrix) {
                    // Compensate for current animation
                    toRect.top -= targetMatrix.f;
                    toRect.left -= targetMatrix.e;
                }
                target.toRect = toRect;
                if (target.thisAnimationDuration) // Could also check if animatingRect is between fromRect and toRect
                {
                    if (isRectEqual(prevFromRect, toRect) && !isRectEqual(fromRect, toRect) && // Make sure animatingRect is on line between toRect & fromRect
                    (animatingRect.top - toRect.top) / (animatingRect.left - toRect.left) === (fromRect.top - toRect.top) / (fromRect.left - toRect.left)) // If returning to same place as started from animation and on same axis
                    time = calculateRealTime(animatingRect, prevFromRect, prevToRect, _this.options);
                } // if fromRect != toRect: animate
                if (!isRectEqual(toRect, fromRect)) {
                    target.prevFromRect = fromRect;
                    target.prevToRect = toRect;
                    if (!time) time = _this.options.animation;
                    _this.animate(target, animatingRect, toRect, time);
                }
                if (time) {
                    animating = true;
                    animationTime = Math.max(animationTime, time);
                    clearTimeout(target.animationResetTimer);
                    target.animationResetTimer = setTimeout(function() {
                        target.animationTime = 0;
                        target.prevFromRect = null;
                        target.fromRect = null;
                        target.prevToRect = null;
                        target.thisAnimationDuration = null;
                    }, time);
                    target.thisAnimationDuration = time;
                }
            });
            clearTimeout(animationCallbackId);
            if (!animating) {
                if (typeof callback === "function") callback();
            } else animationCallbackId = setTimeout(function() {
                if (typeof callback === "function") callback();
            }, animationTime);
            animationStates = [];
        },
        animate: function animate(target, currentRect, toRect, duration) {
            if (duration) {
                css(target, "transition", "");
                css(target, "transform", "");
                var elMatrix = matrix(this.el), scaleX = elMatrix && elMatrix.a, scaleY = elMatrix && elMatrix.d, translateX = (currentRect.left - toRect.left) / (scaleX || 1), translateY = (currentRect.top - toRect.top) / (scaleY || 1);
                target.animatingX = !!translateX;
                target.animatingY = !!translateY;
                css(target, "transform", "translate3d(" + translateX + "px," + translateY + "px,0)");
                this.forRepaintDummy = repaint(target); // repaint
                css(target, "transition", "transform " + duration + "ms" + (this.options.easing ? " " + this.options.easing : ""));
                css(target, "transform", "translate3d(0,0,0)");
                typeof target.animated === "number" && clearTimeout(target.animated);
                target.animated = setTimeout(function() {
                    css(target, "transition", "");
                    css(target, "transform", "");
                    target.animated = false;
                    target.animatingX = false;
                    target.animatingY = false;
                }, duration);
            }
        }
    };
}
function repaint(target) {
    return target.offsetWidth;
}
function calculateRealTime(animatingRect, fromRect, toRect, options) {
    return Math.sqrt(Math.pow(fromRect.top - animatingRect.top, 2) + Math.pow(fromRect.left - animatingRect.left, 2)) / Math.sqrt(Math.pow(fromRect.top - toRect.top, 2) + Math.pow(fromRect.left - toRect.left, 2)) * options.animation;
}
var plugins = [];
var defaults = {
    initializeByDefault: true
};
var PluginManager = {
    mount: function mount(plugin) {
        // Set default static properties
        for(var option in defaults)if (defaults.hasOwnProperty(option) && !(option in plugin)) plugin[option] = defaults[option];
        plugins.forEach(function(p) {
            if (p.pluginName === plugin.pluginName) throw "Sortable: Cannot mount plugin ".concat(plugin.pluginName, " more than once");
        });
        plugins.push(plugin);
    },
    pluginEvent: function pluginEvent(eventName, sortable, evt) {
        var _this = this;
        this.eventCanceled = false;
        evt.cancel = function() {
            _this.eventCanceled = true;
        };
        var eventNameGlobal = eventName + "Global";
        plugins.forEach(function(plugin) {
            if (!sortable[plugin.pluginName]) return; // Fire global events if it exists in this sortable
            if (sortable[plugin.pluginName][eventNameGlobal]) sortable[plugin.pluginName][eventNameGlobal](_objectSpread2({
                sortable: sortable
            }, evt));
             // Only fire plugin event if plugin is enabled in this sortable,
            // and plugin has event defined
            if (sortable.options[plugin.pluginName] && sortable[plugin.pluginName][eventName]) sortable[plugin.pluginName][eventName](_objectSpread2({
                sortable: sortable
            }, evt));
        });
    },
    initializePlugins: function initializePlugins(sortable, el, defaults, options) {
        plugins.forEach(function(plugin) {
            var pluginName = plugin.pluginName;
            if (!sortable.options[pluginName] && !plugin.initializeByDefault) return;
            var initialized = new plugin(sortable, el, sortable.options);
            initialized.sortable = sortable;
            initialized.options = sortable.options;
            sortable[pluginName] = initialized; // Add default options from plugin
            _extends(defaults, initialized.defaults);
        });
        for(var option in sortable.options){
            if (!sortable.options.hasOwnProperty(option)) continue;
            var modified = this.modifyOption(sortable, option, sortable.options[option]);
            if (typeof modified !== "undefined") sortable.options[option] = modified;
        }
    },
    getEventProperties: function getEventProperties(name, sortable) {
        var eventProperties = {};
        plugins.forEach(function(plugin) {
            if (typeof plugin.eventProperties !== "function") return;
            _extends(eventProperties, plugin.eventProperties.call(sortable[plugin.pluginName], name));
        });
        return eventProperties;
    },
    modifyOption: function modifyOption(sortable, name, value) {
        var modifiedValue;
        plugins.forEach(function(plugin) {
            // Plugin must exist on the Sortable
            if (!sortable[plugin.pluginName]) return; // If static option listener exists for this option, call in the context of the Sortable's instance of this plugin
            if (plugin.optionListeners && typeof plugin.optionListeners[name] === "function") modifiedValue = plugin.optionListeners[name].call(sortable[plugin.pluginName], value);
        });
        return modifiedValue;
    }
};
function dispatchEvent(_ref) {
    var sortable = _ref.sortable, rootEl = _ref.rootEl, name = _ref.name, targetEl = _ref.targetEl, cloneEl = _ref.cloneEl, toEl = _ref.toEl, fromEl = _ref.fromEl, oldIndex = _ref.oldIndex, newIndex = _ref.newIndex, oldDraggableIndex = _ref.oldDraggableIndex, newDraggableIndex = _ref.newDraggableIndex, originalEvent = _ref.originalEvent, putSortable = _ref.putSortable, extraEventProperties = _ref.extraEventProperties;
    sortable = sortable || rootEl && rootEl[expando];
    if (!sortable) return;
    var evt, options = sortable.options, onName = "on" + name.charAt(0).toUpperCase() + name.substr(1); // Support for new CustomEvent feature
    if (window.CustomEvent && !IE11OrLess && !Edge) evt = new CustomEvent(name, {
        bubbles: true,
        cancelable: true
    });
    else {
        evt = document.createEvent("Event");
        evt.initEvent(name, true, true);
    }
    evt.to = toEl || rootEl;
    evt.from = fromEl || rootEl;
    evt.item = targetEl || rootEl;
    evt.clone = cloneEl;
    evt.oldIndex = oldIndex;
    evt.newIndex = newIndex;
    evt.oldDraggableIndex = oldDraggableIndex;
    evt.newDraggableIndex = newDraggableIndex;
    evt.originalEvent = originalEvent;
    evt.pullMode = putSortable ? putSortable.lastPutMode : undefined;
    var allEventProperties = _objectSpread2(_objectSpread2({}, extraEventProperties), PluginManager.getEventProperties(name, sortable));
    for(var option in allEventProperties)evt[option] = allEventProperties[option];
    if (rootEl) rootEl.dispatchEvent(evt);
    if (options[onName]) options[onName].call(sortable, evt);
}
var _excluded = [
    "evt"
];
var pluginEvent = function pluginEvent(eventName, sortable) {
    var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {}, originalEvent = _ref.evt, data = _objectWithoutProperties(_ref, _excluded);
    PluginManager.pluginEvent.bind(Sortable)(eventName, sortable, _objectSpread2({
        dragEl: dragEl,
        parentEl: parentEl,
        ghostEl: ghostEl,
        rootEl: rootEl,
        nextEl: nextEl,
        lastDownEl: lastDownEl,
        cloneEl: cloneEl,
        cloneHidden: cloneHidden,
        dragStarted: moved,
        putSortable: putSortable,
        activeSortable: Sortable.active,
        originalEvent: originalEvent,
        oldIndex: oldIndex,
        oldDraggableIndex: oldDraggableIndex,
        newIndex: newIndex,
        newDraggableIndex: newDraggableIndex,
        hideGhostForTarget: _hideGhostForTarget,
        unhideGhostForTarget: _unhideGhostForTarget,
        cloneNowHidden: function cloneNowHidden() {
            cloneHidden = true;
        },
        cloneNowShown: function cloneNowShown() {
            cloneHidden = false;
        },
        dispatchSortableEvent: function dispatchSortableEvent(name) {
            _dispatchEvent({
                sortable: sortable,
                name: name,
                originalEvent: originalEvent
            });
        }
    }, data));
};
function _dispatchEvent(info) {
    dispatchEvent(_objectSpread2({
        putSortable: putSortable,
        cloneEl: cloneEl,
        targetEl: dragEl,
        rootEl: rootEl,
        oldIndex: oldIndex,
        oldDraggableIndex: oldDraggableIndex,
        newIndex: newIndex,
        newDraggableIndex: newDraggableIndex
    }, info));
}
var dragEl, parentEl, ghostEl, rootEl, nextEl, lastDownEl, cloneEl, cloneHidden, oldIndex, newIndex, oldDraggableIndex, newDraggableIndex, activeGroup, putSortable, awaitingDragStarted = false, ignoreNextClick = false, sortables = [], tapEvt, touchEvt, lastDx, lastDy, tapDistanceLeft, tapDistanceTop, moved, lastTarget, lastDirection, pastFirstInvertThresh = false, isCircumstantialInvert = false, targetMoveDistance, // For positioning ghost absolutely
ghostRelativeParent, ghostRelativeParentInitialScroll = [], // (left, top)
_silent = false, savedInputChecked = [];
/** @const */ var documentExists = typeof document !== "undefined", PositionGhostAbsolutely = IOS, CSSFloatProperty = Edge || IE11OrLess ? "cssFloat" : "float", // This will not pass for IE9, because IE9 DnD only works on anchors
supportDraggable = documentExists && !ChromeForAndroid && !IOS && "draggable" in document.createElement("div"), supportCssPointerEvents = function() {
    if (!documentExists) return; // false when <= IE11
    if (IE11OrLess) return false;
    var el = document.createElement("x");
    el.style.cssText = "pointer-events:auto";
    return el.style.pointerEvents === "auto";
}(), _detectDirection = function _detectDirection(el, options) {
    var elCSS = css(el), elWidth = parseInt(elCSS.width) - parseInt(elCSS.paddingLeft) - parseInt(elCSS.paddingRight) - parseInt(elCSS.borderLeftWidth) - parseInt(elCSS.borderRightWidth), child1 = getChild(el, 0, options), child2 = getChild(el, 1, options), firstChildCSS = child1 && css(child1), secondChildCSS = child2 && css(child2), firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + getRect(child1).width, secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + getRect(child2).width;
    if (elCSS.display === "flex") return elCSS.flexDirection === "column" || elCSS.flexDirection === "column-reverse" ? "vertical" : "horizontal";
    if (elCSS.display === "grid") return elCSS.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
    if (child1 && firstChildCSS["float"] && firstChildCSS["float"] !== "none") {
        var touchingSideChild2 = firstChildCSS["float"] === "left" ? "left" : "right";
        return child2 && (secondChildCSS.clear === "both" || secondChildCSS.clear === touchingSideChild2) ? "vertical" : "horizontal";
    }
    return child1 && (firstChildCSS.display === "block" || firstChildCSS.display === "flex" || firstChildCSS.display === "table" || firstChildCSS.display === "grid" || firstChildWidth >= elWidth && elCSS[CSSFloatProperty] === "none" || child2 && elCSS[CSSFloatProperty] === "none" && firstChildWidth + secondChildWidth > elWidth) ? "vertical" : "horizontal";
}, _dragElInRowColumn = function _dragElInRowColumn(dragRect, targetRect, vertical) {
    var dragElS1Opp = vertical ? dragRect.left : dragRect.top, dragElS2Opp = vertical ? dragRect.right : dragRect.bottom, dragElOppLength = vertical ? dragRect.width : dragRect.height, targetS1Opp = vertical ? targetRect.left : targetRect.top, targetS2Opp = vertical ? targetRect.right : targetRect.bottom, targetOppLength = vertical ? targetRect.width : targetRect.height;
    return dragElS1Opp === targetS1Opp || dragElS2Opp === targetS2Opp || dragElS1Opp + dragElOppLength / 2 === targetS1Opp + targetOppLength / 2;
}, /**
 * Detects first nearest empty sortable to X and Y position using emptyInsertThreshold.
 * @param  {Number} x      X position
 * @param  {Number} y      Y position
 * @return {HTMLElement}   Element of the first found nearest Sortable
 */ _detectNearestEmptySortable = function _detectNearestEmptySortable(x, y) {
    var ret;
    sortables.some(function(sortable) {
        var threshold = sortable[expando].options.emptyInsertThreshold;
        if (!threshold || lastChild(sortable)) return;
        var rect = getRect(sortable), insideHorizontally = x >= rect.left - threshold && x <= rect.right + threshold, insideVertically = y >= rect.top - threshold && y <= rect.bottom + threshold;
        if (insideHorizontally && insideVertically) return ret = sortable;
    });
    return ret;
}, _prepareGroup = function _prepareGroup(options) {
    function toFn(value, pull) {
        return function(to, from, dragEl, evt) {
            var sameGroup = to.options.group.name && from.options.group.name && to.options.group.name === from.options.group.name;
            if (value == null && (pull || sameGroup)) // Default pull value
            // Default pull and put value if same group
            return true;
            else if (value == null || value === false) return false;
            else if (pull && value === "clone") return value;
            else if (typeof value === "function") return toFn(value(to, from, dragEl, evt), pull)(to, from, dragEl, evt);
            else {
                var otherGroup = (pull ? to : from).options.group.name;
                return value === true || typeof value === "string" && value === otherGroup || value.join && value.indexOf(otherGroup) > -1;
            }
        };
    }
    var group = {};
    var originalGroup = options.group;
    if (!originalGroup || _typeof(originalGroup) != "object") originalGroup = {
        name: originalGroup
    };
    group.name = originalGroup.name;
    group.checkPull = toFn(originalGroup.pull, true);
    group.checkPut = toFn(originalGroup.put);
    group.revertClone = originalGroup.revertClone;
    options.group = group;
}, _hideGhostForTarget = function _hideGhostForTarget() {
    if (!supportCssPointerEvents && ghostEl) css(ghostEl, "display", "none");
}, _unhideGhostForTarget = function _unhideGhostForTarget() {
    if (!supportCssPointerEvents && ghostEl) css(ghostEl, "display", "");
}; // #1184 fix - Prevent click event on fallback if dragged but item not changed position
if (documentExists && !ChromeForAndroid) document.addEventListener("click", function(evt) {
    if (ignoreNextClick) {
        evt.preventDefault();
        evt.stopPropagation && evt.stopPropagation();
        evt.stopImmediatePropagation && evt.stopImmediatePropagation();
        ignoreNextClick = false;
        return false;
    }
}, true);
var nearestEmptyInsertDetectEvent = function nearestEmptyInsertDetectEvent(evt) {
    if (dragEl) {
        evt = evt.touches ? evt.touches[0] : evt;
        var nearest = _detectNearestEmptySortable(evt.clientX, evt.clientY);
        if (nearest) {
            // Create imitation event
            var event = {};
            for(var i in evt)if (evt.hasOwnProperty(i)) event[i] = evt[i];
            event.target = event.rootEl = nearest;
            event.preventDefault = void 0;
            event.stopPropagation = void 0;
            nearest[expando]._onDragOver(event);
        }
    }
};
var _checkOutsideTargetEl = function _checkOutsideTargetEl(evt) {
    if (dragEl) dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
};
/**
 * @class  Sortable
 * @param  {HTMLElement}  el
 * @param  {Object}       [options]
 */ function Sortable(el, options) {
    if (!(el && el.nodeType && el.nodeType === 1)) throw "Sortable: `el` must be an HTMLElement, not ".concat(({}).toString.call(el));
    this.el = el; // root element
    this.options = options = _extends({}, options); // Export instance
    el[expando] = this;
    var defaults = {
        group: null,
        sort: true,
        disabled: false,
        store: null,
        handle: null,
        draggable: /^[uo]l$/i.test(el.nodeName) ? ">li" : ">*",
        swapThreshold: 1,
        // percentage; 0 <= x <= 1
        invertSwap: false,
        // invert always
        invertedSwapThreshold: null,
        // will be set to same as swapThreshold if default
        removeCloneOnHide: true,
        direction: function direction() {
            return _detectDirection(el, this.options);
        },
        ghostClass: "sortable-ghost",
        chosenClass: "sortable-chosen",
        dragClass: "sortable-drag",
        ignore: "a, img",
        filter: null,
        preventOnFilter: true,
        animation: 0,
        easing: null,
        setData: function setData(dataTransfer, dragEl) {
            dataTransfer.setData("Text", dragEl.textContent);
        },
        dropBubble: false,
        dragoverBubble: false,
        dataIdAttr: "data-id",
        delay: 0,
        delayOnTouchOnly: false,
        touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
        forceFallback: false,
        fallbackClass: "sortable-fallback",
        fallbackOnBody: false,
        fallbackTolerance: 0,
        fallbackOffset: {
            x: 0,
            y: 0
        },
        supportPointer: Sortable.supportPointer !== false && "PointerEvent" in window && !Safari,
        emptyInsertThreshold: 5
    };
    PluginManager.initializePlugins(this, el, defaults); // Set default options
    for(var name in defaults)!(name in options) && (options[name] = defaults[name]);
    _prepareGroup(options); // Bind all private methods
    for(var fn in this)if (fn.charAt(0) === "_" && typeof this[fn] === "function") this[fn] = this[fn].bind(this);
     // Setup drag mode
    this.nativeDraggable = options.forceFallback ? false : supportDraggable;
    if (this.nativeDraggable) // Touch start threshold cannot be greater than the native dragstart threshold
    this.options.touchStartThreshold = 1;
     // Bind events
    if (options.supportPointer) on(el, "pointerdown", this._onTapStart);
    else {
        on(el, "mousedown", this._onTapStart);
        on(el, "touchstart", this._onTapStart);
    }
    if (this.nativeDraggable) {
        on(el, "dragover", this);
        on(el, "dragenter", this);
    }
    sortables.push(this.el); // Restore sorting
    options.store && options.store.get && this.sort(options.store.get(this) || []); // Add animation state manager
    _extends(this, AnimationStateManager());
}
Sortable.prototype = /** @lends Sortable.prototype */ {
    constructor: Sortable,
    _isOutsideThisEl: function _isOutsideThisEl(target) {
        if (!this.el.contains(target) && target !== this.el) lastTarget = null;
    },
    _getDirection: function _getDirection(evt, target) {
        return typeof this.options.direction === "function" ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;
    },
    _onTapStart: function _onTapStart(/** Event|TouchEvent */ evt) {
        if (!evt.cancelable) return;
        var _this = this, el = this.el, options = this.options, preventOnFilter = options.preventOnFilter, type = evt.type, touch = evt.touches && evt.touches[0] || evt.pointerType && evt.pointerType === "touch" && evt, target = (touch || evt).target, originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0] || evt.composedPath && evt.composedPath()[0]) || target, filter = options.filter;
        _saveInputCheckedState(el); // Don't trigger start event when an element is been dragged, otherwise the evt.oldindex always wrong when set option.group.
        if (dragEl) return;
        if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) return; // only left button and enabled
         // cancel dnd if original target is content editable
        if (originalTarget.isContentEditable) return;
         // Safari ignores further event handling after mousedown
        if (!this.nativeDraggable && Safari && target && target.tagName.toUpperCase() === "SELECT") return;
        target = closest(target, options.draggable, el, false);
        if (target && target.animated) return;
        if (lastDownEl === target) // Ignoring duplicate `down`
        return;
         // Get the index of the dragged element within its parent
        oldIndex = index(target);
        oldDraggableIndex = index(target, options.draggable); // Check filter
        if (typeof filter === "function") {
            if (filter.call(this, evt, target, this)) {
                _dispatchEvent({
                    sortable: _this,
                    rootEl: originalTarget,
                    name: "filter",
                    targetEl: target,
                    toEl: el,
                    fromEl: el
                });
                pluginEvent("filter", _this, {
                    evt: evt
                });
                preventOnFilter && evt.cancelable && evt.preventDefault();
                return; // cancel dnd
            }
        } else if (filter) {
            filter = filter.split(",").some(function(criteria) {
                criteria = closest(originalTarget, criteria.trim(), el, false);
                if (criteria) {
                    _dispatchEvent({
                        sortable: _this,
                        rootEl: criteria,
                        name: "filter",
                        targetEl: target,
                        fromEl: el,
                        toEl: el
                    });
                    pluginEvent("filter", _this, {
                        evt: evt
                    });
                    return true;
                }
            });
            if (filter) {
                preventOnFilter && evt.cancelable && evt.preventDefault();
                return; // cancel dnd
            }
        }
        if (options.handle && !closest(originalTarget, options.handle, el, false)) return;
         // Prepare `dragstart`
        this._prepareDragStart(evt, touch, target);
    },
    _prepareDragStart: function _prepareDragStart(/** Event */ evt, /** Touch */ touch, /** HTMLElement */ target) {
        var _this = this, el = _this.el, options = _this.options, ownerDocument = el.ownerDocument, dragStartFn;
        if (target && !dragEl && target.parentNode === el) {
            var dragRect = getRect(target);
            rootEl = el;
            dragEl = target;
            parentEl = dragEl.parentNode;
            nextEl = dragEl.nextSibling;
            lastDownEl = target;
            activeGroup = options.group;
            Sortable.dragged = dragEl;
            tapEvt = {
                target: dragEl,
                clientX: (touch || evt).clientX,
                clientY: (touch || evt).clientY
            };
            tapDistanceLeft = tapEvt.clientX - dragRect.left;
            tapDistanceTop = tapEvt.clientY - dragRect.top;
            this._lastX = (touch || evt).clientX;
            this._lastY = (touch || evt).clientY;
            dragEl.style["will-change"] = "all";
            dragStartFn = function dragStartFn() {
                pluginEvent("delayEnded", _this, {
                    evt: evt
                });
                if (Sortable.eventCanceled) {
                    _this._onDrop();
                    return;
                } // Delayed drag has been triggered
                // we can re-enable the events: touchmove/mousemove
                _this._disableDelayedDragEvents();
                if (!FireFox && _this.nativeDraggable) dragEl.draggable = true;
                 // Bind the events: dragstart/dragend
                _this._triggerDragStart(evt, touch); // Drag start event
                _dispatchEvent({
                    sortable: _this,
                    name: "choose",
                    originalEvent: evt
                }); // Chosen item
                toggleClass(dragEl, options.chosenClass, true);
            }; // Disable "draggable"
            options.ignore.split(",").forEach(function(criteria) {
                find(dragEl, criteria.trim(), _disableDraggable);
            });
            on(ownerDocument, "dragover", nearestEmptyInsertDetectEvent);
            on(ownerDocument, "mousemove", nearestEmptyInsertDetectEvent);
            on(ownerDocument, "touchmove", nearestEmptyInsertDetectEvent);
            on(ownerDocument, "mouseup", _this._onDrop);
            on(ownerDocument, "touchend", _this._onDrop);
            on(ownerDocument, "touchcancel", _this._onDrop); // Make dragEl draggable (must be before delay for FireFox)
            if (FireFox && this.nativeDraggable) {
                this.options.touchStartThreshold = 4;
                dragEl.draggable = true;
            }
            pluginEvent("delayStart", this, {
                evt: evt
            }); // Delay is impossible for native DnD in Edge or IE
            if (options.delay && (!options.delayOnTouchOnly || touch) && (!this.nativeDraggable || !(Edge || IE11OrLess))) {
                if (Sortable.eventCanceled) {
                    this._onDrop();
                    return;
                } // If the user moves the pointer or let go the click or touch
                // before the delay has been reached:
                // disable the delayed drag
                on(ownerDocument, "mouseup", _this._disableDelayedDrag);
                on(ownerDocument, "touchend", _this._disableDelayedDrag);
                on(ownerDocument, "touchcancel", _this._disableDelayedDrag);
                on(ownerDocument, "mousemove", _this._delayedDragTouchMoveHandler);
                on(ownerDocument, "touchmove", _this._delayedDragTouchMoveHandler);
                options.supportPointer && on(ownerDocument, "pointermove", _this._delayedDragTouchMoveHandler);
                _this._dragStartTimer = setTimeout(dragStartFn, options.delay);
            } else dragStartFn();
        }
    },
    _delayedDragTouchMoveHandler: function _delayedDragTouchMoveHandler(/** TouchEvent|PointerEvent **/ e) {
        var touch = e.touches ? e.touches[0] : e;
        if (Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))) this._disableDelayedDrag();
    },
    _disableDelayedDrag: function _disableDelayedDrag() {
        dragEl && _disableDraggable(dragEl);
        clearTimeout(this._dragStartTimer);
        this._disableDelayedDragEvents();
    },
    _disableDelayedDragEvents: function _disableDelayedDragEvents() {
        var ownerDocument = this.el.ownerDocument;
        off(ownerDocument, "mouseup", this._disableDelayedDrag);
        off(ownerDocument, "touchend", this._disableDelayedDrag);
        off(ownerDocument, "touchcancel", this._disableDelayedDrag);
        off(ownerDocument, "mousemove", this._delayedDragTouchMoveHandler);
        off(ownerDocument, "touchmove", this._delayedDragTouchMoveHandler);
        off(ownerDocument, "pointermove", this._delayedDragTouchMoveHandler);
    },
    _triggerDragStart: function _triggerDragStart(/** Event */ evt, /** Touch */ touch) {
        touch = touch || evt.pointerType == "touch" && evt;
        if (!this.nativeDraggable || touch) {
            if (this.options.supportPointer) on(document, "pointermove", this._onTouchMove);
            else if (touch) on(document, "touchmove", this._onTouchMove);
            else on(document, "mousemove", this._onTouchMove);
        } else {
            on(dragEl, "dragend", this);
            on(rootEl, "dragstart", this._onDragStart);
        }
        try {
            if (document.selection) // Timeout neccessary for IE9
            _nextTick(function() {
                document.selection.empty();
            });
            else window.getSelection().removeAllRanges();
        } catch (err) {}
    },
    _dragStarted: function _dragStarted(fallback, evt) {
        awaitingDragStarted = false;
        if (rootEl && dragEl) {
            pluginEvent("dragStarted", this, {
                evt: evt
            });
            if (this.nativeDraggable) on(document, "dragover", _checkOutsideTargetEl);
            var options = this.options; // Apply effect
            !fallback && toggleClass(dragEl, options.dragClass, false);
            toggleClass(dragEl, options.ghostClass, true);
            Sortable.active = this;
            fallback && this._appendGhost(); // Drag start event
            _dispatchEvent({
                sortable: this,
                name: "start",
                originalEvent: evt
            });
        } else this._nulling();
    },
    _emulateDragOver: function _emulateDragOver() {
        if (touchEvt) {
            this._lastX = touchEvt.clientX;
            this._lastY = touchEvt.clientY;
            _hideGhostForTarget();
            var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
            var parent = target;
            while(target && target.shadowRoot){
                target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
                if (target === parent) break;
                parent = target;
            }
            dragEl.parentNode[expando]._isOutsideThisEl(target);
            if (parent) do {
                if (parent[expando]) {
                    var inserted = void 0;
                    inserted = parent[expando]._onDragOver({
                        clientX: touchEvt.clientX,
                        clientY: touchEvt.clientY,
                        target: target,
                        rootEl: parent
                    });
                    if (inserted && !this.options.dragoverBubble) break;
                }
                target = parent; // store last element
            }while (parent = parent.parentNode);
            _unhideGhostForTarget();
        }
    },
    _onTouchMove: function _onTouchMove(/**TouchEvent*/ evt) {
        if (tapEvt) {
            var options = this.options, fallbackTolerance = options.fallbackTolerance, fallbackOffset = options.fallbackOffset, touch = evt.touches ? evt.touches[0] : evt, ghostMatrix = ghostEl && matrix(ghostEl, true), scaleX = ghostEl && ghostMatrix && ghostMatrix.a, scaleY = ghostEl && ghostMatrix && ghostMatrix.d, relativeScrollOffset = PositionGhostAbsolutely && ghostRelativeParent && getRelativeScrollOffset(ghostRelativeParent), dx = (touch.clientX - tapEvt.clientX + fallbackOffset.x) / (scaleX || 1) + (relativeScrollOffset ? relativeScrollOffset[0] - ghostRelativeParentInitialScroll[0] : 0) / (scaleX || 1), dy = (touch.clientY - tapEvt.clientY + fallbackOffset.y) / (scaleY || 1) + (relativeScrollOffset ? relativeScrollOffset[1] - ghostRelativeParentInitialScroll[1] : 0) / (scaleY || 1); // only set the status to dragging, when we are actually dragging
            if (!Sortable.active && !awaitingDragStarted) {
                if (fallbackTolerance && Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) < fallbackTolerance) return;
                this._onDragStart(evt, true);
            }
            if (ghostEl) {
                if (ghostMatrix) {
                    ghostMatrix.e += dx - (lastDx || 0);
                    ghostMatrix.f += dy - (lastDy || 0);
                } else ghostMatrix = {
                    a: 1,
                    b: 0,
                    c: 0,
                    d: 1,
                    e: dx,
                    f: dy
                };
                var cssMatrix = "matrix(".concat(ghostMatrix.a, ",").concat(ghostMatrix.b, ",").concat(ghostMatrix.c, ",").concat(ghostMatrix.d, ",").concat(ghostMatrix.e, ",").concat(ghostMatrix.f, ")");
                css(ghostEl, "webkitTransform", cssMatrix);
                css(ghostEl, "mozTransform", cssMatrix);
                css(ghostEl, "msTransform", cssMatrix);
                css(ghostEl, "transform", cssMatrix);
                lastDx = dx;
                lastDy = dy;
                touchEvt = touch;
            }
            evt.cancelable && evt.preventDefault();
        }
    },
    _appendGhost: function _appendGhost() {
        // Bug if using scale(): https://stackoverflow.com/questions/2637058
        // Not being adjusted for
        if (!ghostEl) {
            var container = this.options.fallbackOnBody ? document.body : rootEl, rect = getRect(dragEl, true, PositionGhostAbsolutely, true, container), options = this.options; // Position absolutely
            if (PositionGhostAbsolutely) {
                // Get relatively positioned parent
                ghostRelativeParent = container;
                while(css(ghostRelativeParent, "position") === "static" && css(ghostRelativeParent, "transform") === "none" && ghostRelativeParent !== document)ghostRelativeParent = ghostRelativeParent.parentNode;
                if (ghostRelativeParent !== document.body && ghostRelativeParent !== document.documentElement) {
                    if (ghostRelativeParent === document) ghostRelativeParent = getWindowScrollingElement();
                    rect.top += ghostRelativeParent.scrollTop;
                    rect.left += ghostRelativeParent.scrollLeft;
                } else ghostRelativeParent = getWindowScrollingElement();
                ghostRelativeParentInitialScroll = getRelativeScrollOffset(ghostRelativeParent);
            }
            ghostEl = dragEl.cloneNode(true);
            toggleClass(ghostEl, options.ghostClass, false);
            toggleClass(ghostEl, options.fallbackClass, true);
            toggleClass(ghostEl, options.dragClass, true);
            css(ghostEl, "transition", "");
            css(ghostEl, "transform", "");
            css(ghostEl, "box-sizing", "border-box");
            css(ghostEl, "margin", 0);
            css(ghostEl, "top", rect.top);
            css(ghostEl, "left", rect.left);
            css(ghostEl, "width", rect.width);
            css(ghostEl, "height", rect.height);
            css(ghostEl, "opacity", "0.8");
            css(ghostEl, "position", PositionGhostAbsolutely ? "absolute" : "fixed");
            css(ghostEl, "zIndex", "100000");
            css(ghostEl, "pointerEvents", "none");
            Sortable.ghost = ghostEl;
            container.appendChild(ghostEl); // Set transform-origin
            css(ghostEl, "transform-origin", tapDistanceLeft / parseInt(ghostEl.style.width) * 100 + "% " + tapDistanceTop / parseInt(ghostEl.style.height) * 100 + "%");
        }
    },
    _onDragStart: function _onDragStart(/**Event*/ evt, /**boolean*/ fallback) {
        var _this = this;
        var dataTransfer = evt.dataTransfer;
        var options = _this.options;
        pluginEvent("dragStart", this, {
            evt: evt
        });
        if (Sortable.eventCanceled) {
            this._onDrop();
            return;
        }
        pluginEvent("setupClone", this);
        if (!Sortable.eventCanceled) {
            cloneEl = clone(dragEl);
            cloneEl.removeAttribute("id");
            cloneEl.draggable = false;
            cloneEl.style["will-change"] = "";
            this._hideClone();
            toggleClass(cloneEl, this.options.chosenClass, false);
            Sortable.clone = cloneEl;
        } // #1143: IFrame support workaround
        _this.cloneId = _nextTick(function() {
            pluginEvent("clone", _this);
            if (Sortable.eventCanceled) return;
            if (!_this.options.removeCloneOnHide) rootEl.insertBefore(cloneEl, dragEl);
            _this._hideClone();
            _dispatchEvent({
                sortable: _this,
                name: "clone"
            });
        });
        !fallback && toggleClass(dragEl, options.dragClass, true); // Set proper drop events
        if (fallback) {
            ignoreNextClick = true;
            _this._loopId = setInterval(_this._emulateDragOver, 50);
        } else {
            // Undo what was set in _prepareDragStart before drag started
            off(document, "mouseup", _this._onDrop);
            off(document, "touchend", _this._onDrop);
            off(document, "touchcancel", _this._onDrop);
            if (dataTransfer) {
                dataTransfer.effectAllowed = "move";
                options.setData && options.setData.call(_this, dataTransfer, dragEl);
            }
            on(document, "drop", _this); // #1276 fix:
            css(dragEl, "transform", "translateZ(0)");
        }
        awaitingDragStarted = true;
        _this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback, evt));
        on(document, "selectstart", _this);
        moved = true;
        if (Safari) css(document.body, "user-select", "none");
    },
    // Returns true - if no further action is needed (either inserted or another condition)
    _onDragOver: function _onDragOver(/**Event*/ evt) {
        var el = this.el, target = evt.target, dragRect, targetRect, revert, options = this.options, group = options.group, activeSortable = Sortable.active, isOwner = activeGroup === group, canSort = options.sort, fromSortable = putSortable || activeSortable, vertical, _this = this, completedFired = false;
        if (_silent) return;
        function dragOverEvent(name, extra) {
            pluginEvent(name, _this, _objectSpread2({
                evt: evt,
                isOwner: isOwner,
                axis: vertical ? "vertical" : "horizontal",
                revert: revert,
                dragRect: dragRect,
                targetRect: targetRect,
                canSort: canSort,
                fromSortable: fromSortable,
                target: target,
                completed: completed,
                onMove: function onMove(target, after) {
                    return _onMove(rootEl, el, dragEl, dragRect, target, getRect(target), evt, after);
                },
                changed: changed
            }, extra));
        } // Capture animation state
        function capture() {
            dragOverEvent("dragOverAnimationCapture");
            _this.captureAnimationState();
            if (_this !== fromSortable) fromSortable.captureAnimationState();
        } // Return invocation when dragEl is inserted (or completed)
        function completed(insertion) {
            dragOverEvent("dragOverCompleted", {
                insertion: insertion
            });
            if (insertion) {
                // Clones must be hidden before folding animation to capture dragRectAbsolute properly
                if (isOwner) activeSortable._hideClone();
                else activeSortable._showClone(_this);
                if (_this !== fromSortable) {
                    // Set ghost class to new sortable's ghost class
                    toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : activeSortable.options.ghostClass, false);
                    toggleClass(dragEl, options.ghostClass, true);
                }
                if (putSortable !== _this && _this !== Sortable.active) putSortable = _this;
                else if (_this === Sortable.active && putSortable) putSortable = null;
                 // Animation
                if (fromSortable === _this) _this._ignoreWhileAnimating = target;
                _this.animateAll(function() {
                    dragOverEvent("dragOverAnimationComplete");
                    _this._ignoreWhileAnimating = null;
                });
                if (_this !== fromSortable) {
                    fromSortable.animateAll();
                    fromSortable._ignoreWhileAnimating = null;
                }
            } // Null lastTarget if it is not inside a previously swapped element
            if (target === dragEl && !dragEl.animated || target === el && !target.animated) lastTarget = null;
             // no bubbling and not fallback
            if (!options.dragoverBubble && !evt.rootEl && target !== document) {
                dragEl.parentNode[expando]._isOutsideThisEl(evt.target); // Do not detect for empty insert if already inserted
                !insertion && nearestEmptyInsertDetectEvent(evt);
            }
            !options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();
            return completedFired = true;
        } // Call when dragEl has been inserted
        function changed() {
            newIndex = index(dragEl);
            newDraggableIndex = index(dragEl, options.draggable);
            _dispatchEvent({
                sortable: _this,
                name: "change",
                toEl: el,
                newIndex: newIndex,
                newDraggableIndex: newDraggableIndex,
                originalEvent: evt
            });
        }
        if (evt.preventDefault !== void 0) evt.cancelable && evt.preventDefault();
        target = closest(target, options.draggable, el, true);
        dragOverEvent("dragOver");
        if (Sortable.eventCanceled) return completedFired;
        if (dragEl.contains(evt.target) || target.animated && target.animatingX && target.animatingY || _this._ignoreWhileAnimating === target) return completed(false);
        ignoreNextClick = false;
        if (activeSortable && !options.disabled && (isOwner ? canSort || (revert = parentEl !== rootEl // Reverting item into the original list
        ) : putSortable === this || (this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) && group.checkPut(this, activeSortable, dragEl, evt))) {
            vertical = this._getDirection(evt, target) === "vertical";
            dragRect = getRect(dragEl);
            dragOverEvent("dragOverValid");
            if (Sortable.eventCanceled) return completedFired;
            if (revert) {
                parentEl = rootEl; // actualization
                capture();
                this._hideClone();
                dragOverEvent("revert");
                if (!Sortable.eventCanceled) {
                    if (nextEl) rootEl.insertBefore(dragEl, nextEl);
                    else rootEl.appendChild(dragEl);
                }
                return completed(true);
            }
            var elLastChild = lastChild(el, options.draggable);
            if (!elLastChild || _ghostIsLast(evt, vertical, this) && !elLastChild.animated) {
                // Insert to end of list
                // If already at end of list: Do not insert
                if (elLastChild === dragEl) return completed(false);
                 // if there is a last element, it is the target
                if (elLastChild && el === evt.target) target = elLastChild;
                if (target) targetRect = getRect(target);
                if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, !!target) !== false) {
                    capture();
                    if (elLastChild && elLastChild.nextSibling) // the last draggable element is not the last node
                    el.insertBefore(dragEl, elLastChild.nextSibling);
                    else el.appendChild(dragEl);
                    parentEl = el; // actualization
                    changed();
                    return completed(true);
                }
            } else if (elLastChild && _ghostIsFirst(evt, vertical, this)) {
                // Insert to start of list
                var firstChild = getChild(el, 0, options, true);
                if (firstChild === dragEl) return completed(false);
                target = firstChild;
                targetRect = getRect(target);
                if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, false) !== false) {
                    capture();
                    el.insertBefore(dragEl, firstChild);
                    parentEl = el; // actualization
                    changed();
                    return completed(true);
                }
            } else if (target.parentNode === el) {
                targetRect = getRect(target);
                var direction = 0, targetBeforeFirstSwap, differentLevel = dragEl.parentNode !== el, differentRowCol = !_dragElInRowColumn(dragEl.animated && dragEl.toRect || dragRect, target.animated && target.toRect || targetRect, vertical), side1 = vertical ? "top" : "left", scrolledPastTop = isScrolledPast(target, "top", "top") || isScrolledPast(dragEl, "top", "top"), scrollBefore = scrolledPastTop ? scrolledPastTop.scrollTop : void 0;
                if (lastTarget !== target) {
                    targetBeforeFirstSwap = targetRect[side1];
                    pastFirstInvertThresh = false;
                    isCircumstantialInvert = !differentRowCol && options.invertSwap || differentLevel;
                }
                direction = _getSwapDirection(evt, target, targetRect, vertical, differentRowCol ? 1 : options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold, isCircumstantialInvert, lastTarget === target);
                var sibling;
                if (direction !== 0) {
                    // Check if target is beside dragEl in respective direction (ignoring hidden elements)
                    var dragIndex = index(dragEl);
                    do {
                        dragIndex -= direction;
                        sibling = parentEl.children[dragIndex];
                    }while (sibling && (css(sibling, "display") === "none" || sibling === ghostEl));
                } // If dragEl is already beside target: Do not insert
                if (direction === 0 || sibling === target) return completed(false);
                lastTarget = target;
                lastDirection = direction;
                var nextSibling = target.nextElementSibling, after = false;
                after = direction === 1;
                var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);
                if (moveVector !== false) {
                    if (moveVector === 1 || moveVector === -1) after = moveVector === 1;
                    _silent = true;
                    setTimeout(_unsilent, 30);
                    capture();
                    if (after && !nextSibling) el.appendChild(dragEl);
                    else target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
                     // Undo chrome's scroll adjustment (has no effect on other browsers)
                    if (scrolledPastTop) scrollBy(scrolledPastTop, 0, scrollBefore - scrolledPastTop.scrollTop);
                    parentEl = dragEl.parentNode; // actualization
                    // must be done before animation
                    if (targetBeforeFirstSwap !== undefined && !isCircumstantialInvert) targetMoveDistance = Math.abs(targetBeforeFirstSwap - getRect(target)[side1]);
                    changed();
                    return completed(true);
                }
            }
            if (el.contains(dragEl)) return completed(false);
        }
        return false;
    },
    _ignoreWhileAnimating: null,
    _offMoveEvents: function _offMoveEvents() {
        off(document, "mousemove", this._onTouchMove);
        off(document, "touchmove", this._onTouchMove);
        off(document, "pointermove", this._onTouchMove);
        off(document, "dragover", nearestEmptyInsertDetectEvent);
        off(document, "mousemove", nearestEmptyInsertDetectEvent);
        off(document, "touchmove", nearestEmptyInsertDetectEvent);
    },
    _offUpEvents: function _offUpEvents() {
        var ownerDocument = this.el.ownerDocument;
        off(ownerDocument, "mouseup", this._onDrop);
        off(ownerDocument, "touchend", this._onDrop);
        off(ownerDocument, "pointerup", this._onDrop);
        off(ownerDocument, "touchcancel", this._onDrop);
        off(document, "selectstart", this);
    },
    _onDrop: function _onDrop(/**Event*/ evt) {
        var el = this.el, options = this.options; // Get the index of the dragged element within its parent
        newIndex = index(dragEl);
        newDraggableIndex = index(dragEl, options.draggable);
        pluginEvent("drop", this, {
            evt: evt
        });
        parentEl = dragEl && dragEl.parentNode; // Get again after plugin event
        newIndex = index(dragEl);
        newDraggableIndex = index(dragEl, options.draggable);
        if (Sortable.eventCanceled) {
            this._nulling();
            return;
        }
        awaitingDragStarted = false;
        isCircumstantialInvert = false;
        pastFirstInvertThresh = false;
        clearInterval(this._loopId);
        clearTimeout(this._dragStartTimer);
        _cancelNextTick(this.cloneId);
        _cancelNextTick(this._dragStartId); // Unbind events
        if (this.nativeDraggable) {
            off(document, "drop", this);
            off(el, "dragstart", this._onDragStart);
        }
        this._offMoveEvents();
        this._offUpEvents();
        if (Safari) css(document.body, "user-select", "");
        css(dragEl, "transform", "");
        if (evt) {
            if (moved) {
                evt.cancelable && evt.preventDefault();
                !options.dropBubble && evt.stopPropagation();
            }
            ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);
            if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== "clone") // Remove clone(s)
            cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
            if (dragEl) {
                if (this.nativeDraggable) off(dragEl, "dragend", this);
                _disableDraggable(dragEl);
                dragEl.style["will-change"] = ""; // Remove classes
                // ghostClass is added in dragStarted
                if (moved && !awaitingDragStarted) toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);
                toggleClass(dragEl, this.options.chosenClass, false); // Drag stop event
                _dispatchEvent({
                    sortable: this,
                    name: "unchoose",
                    toEl: parentEl,
                    newIndex: null,
                    newDraggableIndex: null,
                    originalEvent: evt
                });
                if (rootEl !== parentEl) {
                    if (newIndex >= 0) {
                        // Add event
                        _dispatchEvent({
                            rootEl: parentEl,
                            name: "add",
                            toEl: parentEl,
                            fromEl: rootEl,
                            originalEvent: evt
                        }); // Remove event
                        _dispatchEvent({
                            sortable: this,
                            name: "remove",
                            toEl: parentEl,
                            originalEvent: evt
                        }); // drag from one list and drop into another
                        _dispatchEvent({
                            rootEl: parentEl,
                            name: "sort",
                            toEl: parentEl,
                            fromEl: rootEl,
                            originalEvent: evt
                        });
                        _dispatchEvent({
                            sortable: this,
                            name: "sort",
                            toEl: parentEl,
                            originalEvent: evt
                        });
                    }
                    putSortable && putSortable.save();
                } else {
                    if (newIndex !== oldIndex) {
                        if (newIndex >= 0) {
                            // drag & drop within the same list
                            _dispatchEvent({
                                sortable: this,
                                name: "update",
                                toEl: parentEl,
                                originalEvent: evt
                            });
                            _dispatchEvent({
                                sortable: this,
                                name: "sort",
                                toEl: parentEl,
                                originalEvent: evt
                            });
                        }
                    }
                }
                if (Sortable.active) {
                    /* jshint eqnull:true */ if (newIndex == null || newIndex === -1) {
                        newIndex = oldIndex;
                        newDraggableIndex = oldDraggableIndex;
                    }
                    _dispatchEvent({
                        sortable: this,
                        name: "end",
                        toEl: parentEl,
                        originalEvent: evt
                    }); // Save sorting
                    this.save();
                }
            }
        }
        this._nulling();
    },
    _nulling: function _nulling() {
        pluginEvent("nulling", this);
        rootEl = dragEl = parentEl = ghostEl = nextEl = cloneEl = lastDownEl = cloneHidden = tapEvt = touchEvt = moved = newIndex = newDraggableIndex = oldIndex = oldDraggableIndex = lastTarget = lastDirection = putSortable = activeGroup = Sortable.dragged = Sortable.ghost = Sortable.clone = Sortable.active = null;
        savedInputChecked.forEach(function(el) {
            el.checked = true;
        });
        savedInputChecked.length = lastDx = lastDy = 0;
    },
    handleEvent: function handleEvent(/**Event*/ evt) {
        switch(evt.type){
            case "drop":
            case "dragend":
                this._onDrop(evt);
                break;
            case "dragenter":
            case "dragover":
                if (dragEl) {
                    this._onDragOver(evt);
                    _globalDragOver(evt);
                }
                break;
            case "selectstart":
                evt.preventDefault();
                break;
        }
    },
    /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */ toArray: function toArray() {
        var order = [], el, children = this.el.children, i = 0, n = children.length, options = this.options;
        for(; i < n; i++){
            el = children[i];
            if (closest(el, options.draggable, this.el, false)) order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
        }
        return order;
    },
    /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */ sort: function sort(order, useAnimation) {
        var items = {}, rootEl = this.el;
        this.toArray().forEach(function(id, i) {
            var el = rootEl.children[i];
            if (closest(el, this.options.draggable, rootEl, false)) items[id] = el;
        }, this);
        useAnimation && this.captureAnimationState();
        order.forEach(function(id) {
            if (items[id]) {
                rootEl.removeChild(items[id]);
                rootEl.appendChild(items[id]);
            }
        });
        useAnimation && this.animateAll();
    },
    /**
   * Save the current sorting
   */ save: function save() {
        var store = this.options.store;
        store && store.set && store.set(this);
    },
    /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */ closest: function closest$1(el, selector) {
        return closest(el, selector || this.options.draggable, this.el, false);
    },
    /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */ option: function option(name, value) {
        var options = this.options;
        if (value === void 0) return options[name];
        else {
            var modifiedValue = PluginManager.modifyOption(this, name, value);
            if (typeof modifiedValue !== "undefined") options[name] = modifiedValue;
            else options[name] = value;
            if (name === "group") _prepareGroup(options);
        }
    },
    /**
   * Destroy
   */ destroy: function destroy() {
        pluginEvent("destroy", this);
        var el = this.el;
        el[expando] = null;
        off(el, "mousedown", this._onTapStart);
        off(el, "touchstart", this._onTapStart);
        off(el, "pointerdown", this._onTapStart);
        if (this.nativeDraggable) {
            off(el, "dragover", this);
            off(el, "dragenter", this);
        } // Remove draggable attributes
        Array.prototype.forEach.call(el.querySelectorAll("[draggable]"), function(el) {
            el.removeAttribute("draggable");
        });
        this._onDrop();
        this._disableDelayedDragEvents();
        sortables.splice(sortables.indexOf(this.el), 1);
        this.el = el = null;
    },
    _hideClone: function _hideClone() {
        if (!cloneHidden) {
            pluginEvent("hideClone", this);
            if (Sortable.eventCanceled) return;
            css(cloneEl, "display", "none");
            if (this.options.removeCloneOnHide && cloneEl.parentNode) cloneEl.parentNode.removeChild(cloneEl);
            cloneHidden = true;
        }
    },
    _showClone: function _showClone(putSortable) {
        if (putSortable.lastPutMode !== "clone") {
            this._hideClone();
            return;
        }
        if (cloneHidden) {
            pluginEvent("showClone", this);
            if (Sortable.eventCanceled) return; // show clone at dragEl or original position
            if (dragEl.parentNode == rootEl && !this.options.group.revertClone) rootEl.insertBefore(cloneEl, dragEl);
            else if (nextEl) rootEl.insertBefore(cloneEl, nextEl);
            else rootEl.appendChild(cloneEl);
            if (this.options.group.revertClone) this.animate(dragEl, cloneEl);
            css(cloneEl, "display", "");
            cloneHidden = false;
        }
    }
};
function _globalDragOver(/**Event*/ evt) {
    if (evt.dataTransfer) evt.dataTransfer.dropEffect = "move";
    evt.cancelable && evt.preventDefault();
}
function _onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvent, willInsertAfter) {
    var evt, sortable = fromEl[expando], onMoveFn = sortable.options.onMove, retVal; // Support for new CustomEvent feature
    if (window.CustomEvent && !IE11OrLess && !Edge) evt = new CustomEvent("move", {
        bubbles: true,
        cancelable: true
    });
    else {
        evt = document.createEvent("Event");
        evt.initEvent("move", true, true);
    }
    evt.to = toEl;
    evt.from = fromEl;
    evt.dragged = dragEl;
    evt.draggedRect = dragRect;
    evt.related = targetEl || toEl;
    evt.relatedRect = targetRect || getRect(toEl);
    evt.willInsertAfter = willInsertAfter;
    evt.originalEvent = originalEvent;
    fromEl.dispatchEvent(evt);
    if (onMoveFn) retVal = onMoveFn.call(sortable, evt, originalEvent);
    return retVal;
}
function _disableDraggable(el) {
    el.draggable = false;
}
function _unsilent() {
    _silent = false;
}
function _ghostIsFirst(evt, vertical, sortable) {
    var rect = getRect(getChild(sortable.el, 0, sortable.options, true));
    var spacer = 10;
    return vertical ? evt.clientX < rect.left - spacer || evt.clientY < rect.top && evt.clientX < rect.right : evt.clientY < rect.top - spacer || evt.clientY < rect.bottom && evt.clientX < rect.left;
}
function _ghostIsLast(evt, vertical, sortable) {
    var rect = getRect(lastChild(sortable.el, sortable.options.draggable));
    var spacer = 10;
    return vertical ? evt.clientX > rect.right + spacer || evt.clientX <= rect.right && evt.clientY > rect.bottom && evt.clientX >= rect.left : evt.clientX > rect.right && evt.clientY > rect.top || evt.clientX <= rect.right && evt.clientY > rect.bottom + spacer;
}
function _getSwapDirection(evt, target, targetRect, vertical, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
    var mouseOnAxis = vertical ? evt.clientY : evt.clientX, targetLength = vertical ? targetRect.height : targetRect.width, targetS1 = vertical ? targetRect.top : targetRect.left, targetS2 = vertical ? targetRect.bottom : targetRect.right, invert = false;
    if (!invertSwap) {
        // Never invert or create dragEl shadow when target movemenet causes mouse to move past the end of regular swapThreshold
        if (isLastTarget && targetMoveDistance < targetLength * swapThreshold) {
            // multiplied only by swapThreshold because mouse will already be inside target by (1 - threshold) * targetLength / 2
            // check if past first invert threshold on side opposite of lastDirection
            if (!pastFirstInvertThresh && (lastDirection === 1 ? mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2 : mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2)) // past first invert threshold, do not restrict inverted threshold to dragEl shadow
            pastFirstInvertThresh = true;
            if (!pastFirstInvertThresh) {
                // dragEl shadow (target move distance shadow)
                if (lastDirection === 1 ? mouseOnAxis < targetS1 + targetMoveDistance // over dragEl shadow
                 : mouseOnAxis > targetS2 - targetMoveDistance) return -lastDirection;
            } else invert = true;
        } else {
            // Regular
            if (mouseOnAxis > targetS1 + targetLength * (1 - swapThreshold) / 2 && mouseOnAxis < targetS2 - targetLength * (1 - swapThreshold) / 2) return _getInsertDirection(target);
        }
    }
    invert = invert || invertSwap;
    if (invert) {
        // Invert of regular
        if (mouseOnAxis < targetS1 + targetLength * invertedSwapThreshold / 2 || mouseOnAxis > targetS2 - targetLength * invertedSwapThreshold / 2) return mouseOnAxis > targetS1 + targetLength / 2 ? 1 : -1;
    }
    return 0;
}
/**
 * Gets the direction dragEl must be swapped relative to target in order to make it
 * seem that dragEl has been "inserted" into that element's position
 * @param  {HTMLElement} target       The target whose position dragEl is being inserted at
 * @return {Number}                   Direction dragEl must be swapped
 */ function _getInsertDirection(target) {
    if (index(dragEl) < index(target)) return 1;
    else return -1;
}
/**
 * Generate id
 * @param   {HTMLElement} el
 * @returns {String}
 * @private
 */ function _generateId(el) {
    var str = el.tagName + el.className + el.src + el.href + el.textContent, i = str.length, sum = 0;
    while(i--)sum += str.charCodeAt(i);
    return sum.toString(36);
}
function _saveInputCheckedState(root) {
    savedInputChecked.length = 0;
    var inputs = root.getElementsByTagName("input");
    var idx = inputs.length;
    while(idx--){
        var el = inputs[idx];
        el.checked && savedInputChecked.push(el);
    }
}
function _nextTick(fn) {
    return setTimeout(fn, 0);
}
function _cancelNextTick(id) {
    return clearTimeout(id);
} // Fixed #973:
if (documentExists) on(document, "touchmove", function(evt) {
    if ((Sortable.active || awaitingDragStarted) && evt.cancelable) evt.preventDefault();
});
 // Export utils
Sortable.utils = {
    on: on,
    off: off,
    css: css,
    find: find,
    is: function is(el, selector) {
        return !!closest(el, selector, el, false);
    },
    extend: extend,
    throttle: throttle,
    closest: closest,
    toggleClass: toggleClass,
    clone: clone,
    index: index,
    nextTick: _nextTick,
    cancelNextTick: _cancelNextTick,
    detectDirection: _detectDirection,
    getChild: getChild
};
/**
 * Get the Sortable instance of an element
 * @param  {HTMLElement} element The element
 * @return {Sortable|undefined}         The instance of Sortable
 */ Sortable.get = function(element) {
    return element[expando];
};
/**
 * Mount a plugin to Sortable
 * @param  {...SortablePlugin|SortablePlugin[]} plugins       Plugins being mounted
 */ Sortable.mount = function() {
    for(var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++)plugins[_key] = arguments[_key];
    if (plugins[0].constructor === Array) plugins = plugins[0];
    plugins.forEach(function(plugin) {
        if (!plugin.prototype || !plugin.prototype.constructor) throw "Sortable: Mounted plugin must be a constructor function, not ".concat(({}).toString.call(plugin));
        if (plugin.utils) Sortable.utils = _objectSpread2(_objectSpread2({}, Sortable.utils), plugin.utils);
        PluginManager.mount(plugin);
    });
};
/**
 * Create sortable instance
 * @param {HTMLElement}  el
 * @param {Object}      [options]
 */ Sortable.create = function(el, options) {
    return new Sortable(el, options);
}; // Export
Sortable.version = version;
var autoScrolls = [], scrollEl, scrollRootEl, scrolling = false, lastAutoScrollX, lastAutoScrollY, touchEvt$1, pointerElemChangedInterval;
function AutoScrollPlugin() {
    function AutoScroll() {
        this.defaults = {
            scroll: true,
            forceAutoScrollFallback: false,
            scrollSensitivity: 30,
            scrollSpeed: 10,
            bubbleScroll: true
        }; // Bind all private methods
        for(var fn in this)if (fn.charAt(0) === "_" && typeof this[fn] === "function") this[fn] = this[fn].bind(this);
    }
    AutoScroll.prototype = {
        dragStarted: function dragStarted(_ref) {
            var originalEvent = _ref.originalEvent;
            if (this.sortable.nativeDraggable) on(document, "dragover", this._handleAutoScroll);
            else {
                if (this.options.supportPointer) on(document, "pointermove", this._handleFallbackAutoScroll);
                else if (originalEvent.touches) on(document, "touchmove", this._handleFallbackAutoScroll);
                else on(document, "mousemove", this._handleFallbackAutoScroll);
            }
        },
        dragOverCompleted: function dragOverCompleted(_ref2) {
            var originalEvent = _ref2.originalEvent;
            // For when bubbling is canceled and using fallback (fallback 'touchmove' always reached)
            if (!this.options.dragOverBubble && !originalEvent.rootEl) this._handleAutoScroll(originalEvent);
        },
        drop: function drop() {
            if (this.sortable.nativeDraggable) off(document, "dragover", this._handleAutoScroll);
            else {
                off(document, "pointermove", this._handleFallbackAutoScroll);
                off(document, "touchmove", this._handleFallbackAutoScroll);
                off(document, "mousemove", this._handleFallbackAutoScroll);
            }
            clearPointerElemChangedInterval();
            clearAutoScrolls();
            cancelThrottle();
        },
        nulling: function nulling() {
            touchEvt$1 = scrollRootEl = scrollEl = scrolling = pointerElemChangedInterval = lastAutoScrollX = lastAutoScrollY = null;
            autoScrolls.length = 0;
        },
        _handleFallbackAutoScroll: function _handleFallbackAutoScroll(evt) {
            this._handleAutoScroll(evt, true);
        },
        _handleAutoScroll: function _handleAutoScroll(evt, fallback) {
            var _this = this;
            var x = (evt.touches ? evt.touches[0] : evt).clientX, y = (evt.touches ? evt.touches[0] : evt).clientY, elem = document.elementFromPoint(x, y);
            touchEvt$1 = evt; // IE does not seem to have native autoscroll,
            // Edge's autoscroll seems too conditional,
            // MACOS Safari does not have autoscroll,
            // Firefox and Chrome are good
            if (fallback || this.options.forceAutoScrollFallback || Edge || IE11OrLess || Safari) {
                autoScroll(evt, this.options, elem, fallback); // Listener for pointer element change
                var ogElemScroller = getParentAutoScrollElement(elem, true);
                if (scrolling && (!pointerElemChangedInterval || x !== lastAutoScrollX || y !== lastAutoScrollY)) {
                    pointerElemChangedInterval && clearPointerElemChangedInterval(); // Detect for pointer elem change, emulating native DnD behaviour
                    pointerElemChangedInterval = setInterval(function() {
                        var newElem = getParentAutoScrollElement(document.elementFromPoint(x, y), true);
                        if (newElem !== ogElemScroller) {
                            ogElemScroller = newElem;
                            clearAutoScrolls();
                        }
                        autoScroll(evt, _this.options, newElem, fallback);
                    }, 10);
                    lastAutoScrollX = x;
                    lastAutoScrollY = y;
                }
            } else {
                // if DnD is enabled (and browser has good autoscrolling), first autoscroll will already scroll, so get parent autoscroll of first autoscroll
                if (!this.options.bubbleScroll || getParentAutoScrollElement(elem, true) === getWindowScrollingElement()) {
                    clearAutoScrolls();
                    return;
                }
                autoScroll(evt, this.options, getParentAutoScrollElement(elem, false), false);
            }
        }
    };
    return _extends(AutoScroll, {
        pluginName: "scroll",
        initializeByDefault: true
    });
}
function clearAutoScrolls() {
    autoScrolls.forEach(function(autoScroll) {
        clearInterval(autoScroll.pid);
    });
    autoScrolls = [];
}
function clearPointerElemChangedInterval() {
    clearInterval(pointerElemChangedInterval);
}
var autoScroll = throttle(function(evt, options, rootEl, isFallback) {
    // Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521
    if (!options.scroll) return;
    var x = (evt.touches ? evt.touches[0] : evt).clientX, y = (evt.touches ? evt.touches[0] : evt).clientY, sens = options.scrollSensitivity, speed = options.scrollSpeed, winScroller = getWindowScrollingElement();
    var scrollThisInstance = false, scrollCustomFn; // New scroll root, set scrollEl
    if (scrollRootEl !== rootEl) {
        scrollRootEl = rootEl;
        clearAutoScrolls();
        scrollEl = options.scroll;
        scrollCustomFn = options.scrollFn;
        if (scrollEl === true) scrollEl = getParentAutoScrollElement(rootEl, true);
    }
    var layersOut = 0;
    var currentParent = scrollEl;
    do {
        var el = currentParent, rect = getRect(el), top = rect.top, bottom = rect.bottom, left = rect.left, right = rect.right, width = rect.width, height = rect.height, canScrollX = void 0, canScrollY = void 0, scrollWidth = el.scrollWidth, scrollHeight = el.scrollHeight, elCSS = css(el), scrollPosX = el.scrollLeft, scrollPosY = el.scrollTop;
        if (el === winScroller) {
            canScrollX = width < scrollWidth && (elCSS.overflowX === "auto" || elCSS.overflowX === "scroll" || elCSS.overflowX === "visible");
            canScrollY = height < scrollHeight && (elCSS.overflowY === "auto" || elCSS.overflowY === "scroll" || elCSS.overflowY === "visible");
        } else {
            canScrollX = width < scrollWidth && (elCSS.overflowX === "auto" || elCSS.overflowX === "scroll");
            canScrollY = height < scrollHeight && (elCSS.overflowY === "auto" || elCSS.overflowY === "scroll");
        }
        var vx = canScrollX && (Math.abs(right - x) <= sens && scrollPosX + width < scrollWidth) - (Math.abs(left - x) <= sens && !!scrollPosX);
        var vy = canScrollY && (Math.abs(bottom - y) <= sens && scrollPosY + height < scrollHeight) - (Math.abs(top - y) <= sens && !!scrollPosY);
        if (!autoScrolls[layersOut]) {
            for(var i = 0; i <= layersOut; i++)if (!autoScrolls[i]) autoScrolls[i] = {};
        }
        if (autoScrolls[layersOut].vx != vx || autoScrolls[layersOut].vy != vy || autoScrolls[layersOut].el !== el) {
            autoScrolls[layersOut].el = el;
            autoScrolls[layersOut].vx = vx;
            autoScrolls[layersOut].vy = vy;
            clearInterval(autoScrolls[layersOut].pid);
            if (vx != 0 || vy != 0) {
                scrollThisInstance = true;
                /* jshint loopfunc:true */ autoScrolls[layersOut].pid = setInterval((function() {
                    // emulate drag over during autoscroll (fallback), emulating native DnD behaviour
                    if (isFallback && this.layer === 0) Sortable.active._onTouchMove(touchEvt$1); // To move ghost if it is positioned absolutely
                    var scrollOffsetY = autoScrolls[this.layer].vy ? autoScrolls[this.layer].vy * speed : 0;
                    var scrollOffsetX = autoScrolls[this.layer].vx ? autoScrolls[this.layer].vx * speed : 0;
                    if (typeof scrollCustomFn === "function") {
                        if (scrollCustomFn.call(Sortable.dragged.parentNode[expando], scrollOffsetX, scrollOffsetY, evt, touchEvt$1, autoScrolls[this.layer].el) !== "continue") return;
                    }
                    scrollBy(autoScrolls[this.layer].el, scrollOffsetX, scrollOffsetY);
                }).bind({
                    layer: layersOut
                }), 24);
            }
        }
        layersOut++;
    }while (options.bubbleScroll && currentParent !== winScroller && (currentParent = getParentAutoScrollElement(currentParent, false)));
    scrolling = scrollThisInstance; // in case another function catches scrolling as false in between when it is not
}, 30);
var drop = function drop(_ref) {
    var originalEvent = _ref.originalEvent, putSortable = _ref.putSortable, dragEl = _ref.dragEl, activeSortable = _ref.activeSortable, dispatchSortableEvent = _ref.dispatchSortableEvent, hideGhostForTarget = _ref.hideGhostForTarget, unhideGhostForTarget = _ref.unhideGhostForTarget;
    if (!originalEvent) return;
    var toSortable = putSortable || activeSortable;
    hideGhostForTarget();
    var touch = originalEvent.changedTouches && originalEvent.changedTouches.length ? originalEvent.changedTouches[0] : originalEvent;
    var target = document.elementFromPoint(touch.clientX, touch.clientY);
    unhideGhostForTarget();
    if (toSortable && !toSortable.el.contains(target)) {
        dispatchSortableEvent("spill");
        this.onSpill({
            dragEl: dragEl,
            putSortable: putSortable
        });
    }
};
function Revert() {}
Revert.prototype = {
    startIndex: null,
    dragStart: function dragStart(_ref2) {
        var oldDraggableIndex = _ref2.oldDraggableIndex;
        this.startIndex = oldDraggableIndex;
    },
    onSpill: function onSpill(_ref3) {
        var dragEl = _ref3.dragEl, putSortable = _ref3.putSortable;
        this.sortable.captureAnimationState();
        if (putSortable) putSortable.captureAnimationState();
        var nextSibling = getChild(this.sortable.el, this.startIndex, this.options);
        if (nextSibling) this.sortable.el.insertBefore(dragEl, nextSibling);
        else this.sortable.el.appendChild(dragEl);
        this.sortable.animateAll();
        if (putSortable) putSortable.animateAll();
    },
    drop: drop
};
_extends(Revert, {
    pluginName: "revertOnSpill"
});
function Remove() {}
Remove.prototype = {
    onSpill: function onSpill(_ref4) {
        var dragEl = _ref4.dragEl, putSortable = _ref4.putSortable;
        var parentSortable = putSortable || this.sortable;
        parentSortable.captureAnimationState();
        dragEl.parentNode && dragEl.parentNode.removeChild(dragEl);
        parentSortable.animateAll();
    },
    drop: drop
};
_extends(Remove, {
    pluginName: "removeOnSpill"
});
var lastSwapEl;
function SwapPlugin() {
    function Swap() {
        this.defaults = {
            swapClass: "sortable-swap-highlight"
        };
    }
    Swap.prototype = {
        dragStart: function dragStart(_ref) {
            var dragEl = _ref.dragEl;
            lastSwapEl = dragEl;
        },
        dragOverValid: function dragOverValid(_ref2) {
            var completed = _ref2.completed, target = _ref2.target, onMove = _ref2.onMove, activeSortable = _ref2.activeSortable, changed = _ref2.changed, cancel = _ref2.cancel;
            if (!activeSortable.options.swap) return;
            var el = this.sortable.el, options = this.options;
            if (target && target !== el) {
                var prevSwapEl = lastSwapEl;
                if (onMove(target) !== false) {
                    toggleClass(target, options.swapClass, true);
                    lastSwapEl = target;
                } else lastSwapEl = null;
                if (prevSwapEl && prevSwapEl !== lastSwapEl) toggleClass(prevSwapEl, options.swapClass, false);
            }
            changed();
            completed(true);
            cancel();
        },
        drop: function drop(_ref3) {
            var activeSortable = _ref3.activeSortable, putSortable = _ref3.putSortable, dragEl = _ref3.dragEl;
            var toSortable = putSortable || this.sortable;
            var options = this.options;
            lastSwapEl && toggleClass(lastSwapEl, options.swapClass, false);
            if (lastSwapEl && (options.swap || putSortable && putSortable.options.swap)) {
                if (dragEl !== lastSwapEl) {
                    toSortable.captureAnimationState();
                    if (toSortable !== activeSortable) activeSortable.captureAnimationState();
                    swapNodes(dragEl, lastSwapEl);
                    toSortable.animateAll();
                    if (toSortable !== activeSortable) activeSortable.animateAll();
                }
            }
        },
        nulling: function nulling() {
            lastSwapEl = null;
        }
    };
    return _extends(Swap, {
        pluginName: "swap",
        eventProperties: function eventProperties() {
            return {
                swapItem: lastSwapEl
            };
        }
    });
}
function swapNodes(n1, n2) {
    var p1 = n1.parentNode, p2 = n2.parentNode, i1, i2;
    if (!p1 || !p2 || p1.isEqualNode(n2) || p2.isEqualNode(n1)) return;
    i1 = index(n1);
    i2 = index(n2);
    if (p1.isEqualNode(p2) && i1 < i2) i2++;
    p1.insertBefore(n2, p1.children[i1]);
    p2.insertBefore(n1, p2.children[i2]);
}
var multiDragElements = [], multiDragClones = [], lastMultiDragSelect, // for selection with modifier key down (SHIFT)
multiDragSortable, initialFolding = false, // Initial multi-drag fold when drag started
folding = false, // Folding any other time
dragStarted = false, dragEl$1, clonesFromRect, clonesHidden;
function MultiDragPlugin() {
    function MultiDrag(sortable) {
        // Bind all private methods
        for(var fn in this)if (fn.charAt(0) === "_" && typeof this[fn] === "function") this[fn] = this[fn].bind(this);
        if (!sortable.options.avoidImplicitDeselect) {
            if (sortable.options.supportPointer) on(document, "pointerup", this._deselectMultiDrag);
            else {
                on(document, "mouseup", this._deselectMultiDrag);
                on(document, "touchend", this._deselectMultiDrag);
            }
        }
        on(document, "keydown", this._checkKeyDown);
        on(document, "keyup", this._checkKeyUp);
        this.defaults = {
            selectedClass: "sortable-selected",
            multiDragKey: null,
            avoidImplicitDeselect: false,
            setData: function setData(dataTransfer, dragEl) {
                var data = "";
                if (multiDragElements.length && multiDragSortable === sortable) multiDragElements.forEach(function(multiDragElement, i) {
                    data += (!i ? "" : ", ") + multiDragElement.textContent;
                });
                else data = dragEl.textContent;
                dataTransfer.setData("Text", data);
            }
        };
    }
    MultiDrag.prototype = {
        multiDragKeyDown: false,
        isMultiDrag: false,
        delayStartGlobal: function delayStartGlobal(_ref) {
            var dragged = _ref.dragEl;
            dragEl$1 = dragged;
        },
        delayEnded: function delayEnded() {
            this.isMultiDrag = ~multiDragElements.indexOf(dragEl$1);
        },
        setupClone: function setupClone(_ref2) {
            var sortable = _ref2.sortable, cancel = _ref2.cancel;
            if (!this.isMultiDrag) return;
            for(var i = 0; i < multiDragElements.length; i++){
                multiDragClones.push(clone(multiDragElements[i]));
                multiDragClones[i].sortableIndex = multiDragElements[i].sortableIndex;
                multiDragClones[i].draggable = false;
                multiDragClones[i].style["will-change"] = "";
                toggleClass(multiDragClones[i], this.options.selectedClass, false);
                multiDragElements[i] === dragEl$1 && toggleClass(multiDragClones[i], this.options.chosenClass, false);
            }
            sortable._hideClone();
            cancel();
        },
        clone: function clone(_ref3) {
            var sortable = _ref3.sortable, rootEl = _ref3.rootEl, dispatchSortableEvent = _ref3.dispatchSortableEvent, cancel = _ref3.cancel;
            if (!this.isMultiDrag) return;
            if (!this.options.removeCloneOnHide) {
                if (multiDragElements.length && multiDragSortable === sortable) {
                    insertMultiDragClones(true, rootEl);
                    dispatchSortableEvent("clone");
                    cancel();
                }
            }
        },
        showClone: function showClone(_ref4) {
            var cloneNowShown = _ref4.cloneNowShown, rootEl = _ref4.rootEl, cancel = _ref4.cancel;
            if (!this.isMultiDrag) return;
            insertMultiDragClones(false, rootEl);
            multiDragClones.forEach(function(clone) {
                css(clone, "display", "");
            });
            cloneNowShown();
            clonesHidden = false;
            cancel();
        },
        hideClone: function hideClone(_ref5) {
            var _this = this;
            var sortable = _ref5.sortable, cloneNowHidden = _ref5.cloneNowHidden, cancel = _ref5.cancel;
            if (!this.isMultiDrag) return;
            multiDragClones.forEach(function(clone) {
                css(clone, "display", "none");
                if (_this.options.removeCloneOnHide && clone.parentNode) clone.parentNode.removeChild(clone);
            });
            cloneNowHidden();
            clonesHidden = true;
            cancel();
        },
        dragStartGlobal: function dragStartGlobal(_ref6) {
            var sortable = _ref6.sortable;
            if (!this.isMultiDrag && multiDragSortable) multiDragSortable.multiDrag._deselectMultiDrag();
            multiDragElements.forEach(function(multiDragElement) {
                multiDragElement.sortableIndex = index(multiDragElement);
            }); // Sort multi-drag elements
            multiDragElements = multiDragElements.sort(function(a, b) {
                return a.sortableIndex - b.sortableIndex;
            });
            dragStarted = true;
        },
        dragStarted: function dragStarted(_ref7) {
            var _this2 = this;
            var sortable = _ref7.sortable;
            if (!this.isMultiDrag) return;
            if (this.options.sort) {
                // Capture rects,
                // hide multi drag elements (by positioning them absolute),
                // set multi drag elements rects to dragRect,
                // show multi drag elements,
                // animate to rects,
                // unset rects & remove from DOM
                sortable.captureAnimationState();
                if (this.options.animation) {
                    multiDragElements.forEach(function(multiDragElement) {
                        if (multiDragElement === dragEl$1) return;
                        css(multiDragElement, "position", "absolute");
                    });
                    var dragRect = getRect(dragEl$1, false, true, true);
                    multiDragElements.forEach(function(multiDragElement) {
                        if (multiDragElement === dragEl$1) return;
                        setRect(multiDragElement, dragRect);
                    });
                    folding = true;
                    initialFolding = true;
                }
            }
            sortable.animateAll(function() {
                folding = false;
                initialFolding = false;
                if (_this2.options.animation) multiDragElements.forEach(function(multiDragElement) {
                    unsetRect(multiDragElement);
                });
                 // Remove all auxiliary multidrag items from el, if sorting enabled
                if (_this2.options.sort) removeMultiDragElements();
            });
        },
        dragOver: function dragOver(_ref8) {
            var target = _ref8.target, completed = _ref8.completed, cancel = _ref8.cancel;
            if (folding && ~multiDragElements.indexOf(target)) {
                completed(false);
                cancel();
            }
        },
        revert: function revert(_ref9) {
            var fromSortable = _ref9.fromSortable, rootEl = _ref9.rootEl, sortable = _ref9.sortable, dragRect = _ref9.dragRect;
            if (multiDragElements.length > 1) {
                // Setup unfold animation
                multiDragElements.forEach(function(multiDragElement) {
                    sortable.addAnimationState({
                        target: multiDragElement,
                        rect: folding ? getRect(multiDragElement) : dragRect
                    });
                    unsetRect(multiDragElement);
                    multiDragElement.fromRect = dragRect;
                    fromSortable.removeAnimationState(multiDragElement);
                });
                folding = false;
                insertMultiDragElements(!this.options.removeCloneOnHide, rootEl);
            }
        },
        dragOverCompleted: function dragOverCompleted(_ref10) {
            var sortable = _ref10.sortable, isOwner = _ref10.isOwner, insertion = _ref10.insertion, activeSortable = _ref10.activeSortable, parentEl = _ref10.parentEl, putSortable = _ref10.putSortable;
            var options = this.options;
            if (insertion) {
                // Clones must be hidden before folding animation to capture dragRectAbsolute properly
                if (isOwner) activeSortable._hideClone();
                initialFolding = false; // If leaving sort:false root, or already folding - Fold to new location
                if (options.animation && multiDragElements.length > 1 && (folding || !isOwner && !activeSortable.options.sort && !putSortable)) {
                    // Fold: Set all multi drag elements's rects to dragEl's rect when multi-drag elements are invisible
                    var dragRectAbsolute = getRect(dragEl$1, false, true, true);
                    multiDragElements.forEach(function(multiDragElement) {
                        if (multiDragElement === dragEl$1) return;
                        setRect(multiDragElement, dragRectAbsolute); // Move element(s) to end of parentEl so that it does not interfere with multi-drag clones insertion if they are inserted
                        // while folding, and so that we can capture them again because old sortable will no longer be fromSortable
                        parentEl.appendChild(multiDragElement);
                    });
                    folding = true;
                } // Clones must be shown (and check to remove multi drags) after folding when interfering multiDragElements are moved out
                if (!isOwner) {
                    // Only remove if not folding (folding will remove them anyways)
                    if (!folding) removeMultiDragElements();
                    if (multiDragElements.length > 1) {
                        var clonesHiddenBefore = clonesHidden;
                        activeSortable._showClone(sortable); // Unfold animation for clones if showing from hidden
                        if (activeSortable.options.animation && !clonesHidden && clonesHiddenBefore) multiDragClones.forEach(function(clone) {
                            activeSortable.addAnimationState({
                                target: clone,
                                rect: clonesFromRect
                            });
                            clone.fromRect = clonesFromRect;
                            clone.thisAnimationDuration = null;
                        });
                    } else activeSortable._showClone(sortable);
                }
            }
        },
        dragOverAnimationCapture: function dragOverAnimationCapture(_ref11) {
            var dragRect = _ref11.dragRect, isOwner = _ref11.isOwner, activeSortable = _ref11.activeSortable;
            multiDragElements.forEach(function(multiDragElement) {
                multiDragElement.thisAnimationDuration = null;
            });
            if (activeSortable.options.animation && !isOwner && activeSortable.multiDrag.isMultiDrag) {
                clonesFromRect = _extends({}, dragRect);
                var dragMatrix = matrix(dragEl$1, true);
                clonesFromRect.top -= dragMatrix.f;
                clonesFromRect.left -= dragMatrix.e;
            }
        },
        dragOverAnimationComplete: function dragOverAnimationComplete() {
            if (folding) {
                folding = false;
                removeMultiDragElements();
            }
        },
        drop: function drop(_ref12) {
            var evt = _ref12.originalEvent, rootEl = _ref12.rootEl, parentEl = _ref12.parentEl, sortable = _ref12.sortable, dispatchSortableEvent = _ref12.dispatchSortableEvent, oldIndex = _ref12.oldIndex, putSortable = _ref12.putSortable;
            var toSortable = putSortable || this.sortable;
            if (!evt) return;
            var options = this.options, children = parentEl.children; // Multi-drag selection
            if (!dragStarted) {
                if (options.multiDragKey && !this.multiDragKeyDown) this._deselectMultiDrag();
                toggleClass(dragEl$1, options.selectedClass, !~multiDragElements.indexOf(dragEl$1));
                if (!~multiDragElements.indexOf(dragEl$1)) {
                    multiDragElements.push(dragEl$1);
                    dispatchEvent({
                        sortable: sortable,
                        rootEl: rootEl,
                        name: "select",
                        targetEl: dragEl$1,
                        originalEvent: evt
                    }); // Modifier activated, select from last to dragEl
                    if (evt.shiftKey && lastMultiDragSelect && sortable.el.contains(lastMultiDragSelect)) {
                        var lastIndex = index(lastMultiDragSelect), currentIndex = index(dragEl$1);
                        if (~lastIndex && ~currentIndex && lastIndex !== currentIndex) {
                            // Must include lastMultiDragSelect (select it), in case modified selection from no selection
                            // (but previous selection existed)
                            var n, i;
                            if (currentIndex > lastIndex) {
                                i = lastIndex;
                                n = currentIndex;
                            } else {
                                i = currentIndex;
                                n = lastIndex + 1;
                            }
                            for(; i < n; i++){
                                if (~multiDragElements.indexOf(children[i])) continue;
                                toggleClass(children[i], options.selectedClass, true);
                                multiDragElements.push(children[i]);
                                dispatchEvent({
                                    sortable: sortable,
                                    rootEl: rootEl,
                                    name: "select",
                                    targetEl: children[i],
                                    originalEvent: evt
                                });
                            }
                        }
                    } else lastMultiDragSelect = dragEl$1;
                    multiDragSortable = toSortable;
                } else {
                    multiDragElements.splice(multiDragElements.indexOf(dragEl$1), 1);
                    lastMultiDragSelect = null;
                    dispatchEvent({
                        sortable: sortable,
                        rootEl: rootEl,
                        name: "deselect",
                        targetEl: dragEl$1,
                        originalEvent: evt
                    });
                }
            } // Multi-drag drop
            if (dragStarted && this.isMultiDrag) {
                folding = false; // Do not "unfold" after around dragEl if reverted
                if ((parentEl[expando].options.sort || parentEl !== rootEl) && multiDragElements.length > 1) {
                    var dragRect = getRect(dragEl$1), multiDragIndex = index(dragEl$1, ":not(." + this.options.selectedClass + ")");
                    if (!initialFolding && options.animation) dragEl$1.thisAnimationDuration = null;
                    toSortable.captureAnimationState();
                    if (!initialFolding) {
                        if (options.animation) {
                            dragEl$1.fromRect = dragRect;
                            multiDragElements.forEach(function(multiDragElement) {
                                multiDragElement.thisAnimationDuration = null;
                                if (multiDragElement !== dragEl$1) {
                                    var rect = folding ? getRect(multiDragElement) : dragRect;
                                    multiDragElement.fromRect = rect; // Prepare unfold animation
                                    toSortable.addAnimationState({
                                        target: multiDragElement,
                                        rect: rect
                                    });
                                }
                            });
                        } // Multi drag elements are not necessarily removed from the DOM on drop, so to reinsert
                        // properly they must all be removed
                        removeMultiDragElements();
                        multiDragElements.forEach(function(multiDragElement) {
                            if (children[multiDragIndex]) parentEl.insertBefore(multiDragElement, children[multiDragIndex]);
                            else parentEl.appendChild(multiDragElement);
                            multiDragIndex++;
                        }); // If initial folding is done, the elements may have changed position because they are now
                        // unfolding around dragEl, even though dragEl may not have his index changed, so update event
                        // must be fired here as Sortable will not.
                        if (oldIndex === index(dragEl$1)) {
                            var update = false;
                            multiDragElements.forEach(function(multiDragElement) {
                                if (multiDragElement.sortableIndex !== index(multiDragElement)) {
                                    update = true;
                                    return;
                                }
                            });
                            if (update) dispatchSortableEvent("update");
                        }
                    } // Must be done after capturing individual rects (scroll bar)
                    multiDragElements.forEach(function(multiDragElement) {
                        unsetRect(multiDragElement);
                    });
                    toSortable.animateAll();
                }
                multiDragSortable = toSortable;
            } // Remove clones if necessary
            if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== "clone") multiDragClones.forEach(function(clone) {
                clone.parentNode && clone.parentNode.removeChild(clone);
            });
        },
        nullingGlobal: function nullingGlobal() {
            this.isMultiDrag = dragStarted = false;
            multiDragClones.length = 0;
        },
        destroyGlobal: function destroyGlobal() {
            this._deselectMultiDrag();
            off(document, "pointerup", this._deselectMultiDrag);
            off(document, "mouseup", this._deselectMultiDrag);
            off(document, "touchend", this._deselectMultiDrag);
            off(document, "keydown", this._checkKeyDown);
            off(document, "keyup", this._checkKeyUp);
        },
        _deselectMultiDrag: function _deselectMultiDrag(evt) {
            if (typeof dragStarted !== "undefined" && dragStarted) return; // Only deselect if selection is in this sortable
            if (multiDragSortable !== this.sortable) return; // Only deselect if target is not item in this sortable
            if (evt && closest(evt.target, this.options.draggable, this.sortable.el, false)) return; // Only deselect if left click
            if (evt && evt.button !== 0) return;
            while(multiDragElements.length){
                var el = multiDragElements[0];
                toggleClass(el, this.options.selectedClass, false);
                multiDragElements.shift();
                dispatchEvent({
                    sortable: this.sortable,
                    rootEl: this.sortable.el,
                    name: "deselect",
                    targetEl: el,
                    originalEvent: evt
                });
            }
        },
        _checkKeyDown: function _checkKeyDown(evt) {
            if (evt.key === this.options.multiDragKey) this.multiDragKeyDown = true;
        },
        _checkKeyUp: function _checkKeyUp(evt) {
            if (evt.key === this.options.multiDragKey) this.multiDragKeyDown = false;
        }
    };
    return _extends(MultiDrag, {
        // Static methods & properties
        pluginName: "multiDrag",
        utils: {
            /**
       * Selects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be selected
       */ select: function select(el) {
                var sortable = el.parentNode[expando];
                if (!sortable || !sortable.options.multiDrag || ~multiDragElements.indexOf(el)) return;
                if (multiDragSortable && multiDragSortable !== sortable) {
                    multiDragSortable.multiDrag._deselectMultiDrag();
                    multiDragSortable = sortable;
                }
                toggleClass(el, sortable.options.selectedClass, true);
                multiDragElements.push(el);
            },
            /**
       * Deselects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be deselected
       */ deselect: function deselect(el) {
                var sortable = el.parentNode[expando], index = multiDragElements.indexOf(el);
                if (!sortable || !sortable.options.multiDrag || !~index) return;
                toggleClass(el, sortable.options.selectedClass, false);
                multiDragElements.splice(index, 1);
            }
        },
        eventProperties: function eventProperties() {
            var _this3 = this;
            var oldIndicies = [], newIndicies = [];
            multiDragElements.forEach(function(multiDragElement) {
                oldIndicies.push({
                    multiDragElement: multiDragElement,
                    index: multiDragElement.sortableIndex
                }); // multiDragElements will already be sorted if folding
                var newIndex;
                if (folding && multiDragElement !== dragEl$1) newIndex = -1;
                else if (folding) newIndex = index(multiDragElement, ":not(." + _this3.options.selectedClass + ")");
                else newIndex = index(multiDragElement);
                newIndicies.push({
                    multiDragElement: multiDragElement,
                    index: newIndex
                });
            });
            return {
                items: _toConsumableArray(multiDragElements),
                clones: [].concat(multiDragClones),
                oldIndicies: oldIndicies,
                newIndicies: newIndicies
            };
        },
        optionListeners: {
            multiDragKey: function multiDragKey(key) {
                key = key.toLowerCase();
                if (key === "ctrl") key = "Control";
                else if (key.length > 1) key = key.charAt(0).toUpperCase() + key.substr(1);
                return key;
            }
        }
    });
}
function insertMultiDragElements(clonesInserted, rootEl) {
    multiDragElements.forEach(function(multiDragElement, i) {
        var target = rootEl.children[multiDragElement.sortableIndex + (clonesInserted ? Number(i) : 0)];
        if (target) rootEl.insertBefore(multiDragElement, target);
        else rootEl.appendChild(multiDragElement);
    });
}
/**
 * Insert multi-drag clones
 * @param  {[Boolean]} elementsInserted  Whether the multi-drag elements are inserted
 * @param  {HTMLElement} rootEl
 */ function insertMultiDragClones(elementsInserted, rootEl) {
    multiDragClones.forEach(function(clone, i) {
        var target = rootEl.children[clone.sortableIndex + (elementsInserted ? Number(i) : 0)];
        if (target) rootEl.insertBefore(clone, target);
        else rootEl.appendChild(clone);
    });
}
function removeMultiDragElements() {
    multiDragElements.forEach(function(multiDragElement) {
        if (multiDragElement === dragEl$1) return;
        multiDragElement.parentNode && multiDragElement.parentNode.removeChild(multiDragElement);
    });
}
Sortable.mount(new AutoScrollPlugin());
Sortable.mount(Remove, Revert);
exports.default = Sortable;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9KDn5":[function(require,module,exports) {
module.exports = require("39750591b10f0753");

},{"39750591b10f0753":"ewKep"}],"ewKep":[function(require,module,exports) {
module.exports = require("73b87bcb4d880f63")(require("809decd340c6a791"));

},{"73b87bcb4d880f63":"9rX71","809decd340c6a791":"1ftxa"}],"9rX71":[function(require,module,exports) {
var createHyphenator = require("79d64a36c2ee14fb");
module.exports = function(patterns) {
    return {
        hyphenate: createHyphenator(patterns, {
            async: true
        }),
        hyphenateHTML: createHyphenator(patterns, {
            async: true,
            html: true
        }),
        hyphenateHTMLSync: createHyphenator(patterns, {
            html: true
        }),
        hyphenateSync: createHyphenator(patterns),
        patterns: patterns
    };
};

},{"79d64a36c2ee14fb":"iSj0r"}],"iSj0r":[function(require,module,exports) {
var global = arguments[3];
/** Text hyphenation in Javascript.
 *  Copyright (C) 2021 Yevhen Tiurin (yevhentiurin@gmail.com)
 *  https://github.com/ytiurin/hyphen
 *
 *  Released under the ISC license
 *  https://github.com/ytiurin/hyphen/blob/master/LICENSE
 */ (function(root, factory) {
    if (typeof define === "function" && define.amd) // AMD. Register as an anonymous module.
    define([], factory);
    else if (0, module.exports) // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
    else // Browser globals (root is window)
    root.createHyphenator = factory();
})(this, function() {
    var SETTING_DEFAULT_ASYNC = false, SETTING_DEFAULT_DEBUG = false, SETTING_DEFAULT_HTML = false, SETTING_DEFAULT_HYPH_CHAR = "\xad", SETTING_DEFAULT_MIN_WORD_LENGTH = 5, SETTING_NAME_ASYNC = "async", SETTING_NAME_DEBUG = "debug", SETTING_NAME_HTML = "html", SETTING_NAME_HYPH_CHAR = "hyphenChar", SETTING_NAME_MIN_WORD_LENGTH = "minWordLength";
    var _global = typeof global === "object" ? global : typeof window === "object" ? window : typeof self === "object" ? self : typeof this === "object" ? this : {};
    function cloneObj(source) {
        var target = {};
        for(var key in source)target[key] = source[key];
        return target;
    }
    function keyOrDefault(object, key, defaultValue) {
        if (key in object) return object[key];
        return defaultValue;
    }
    function exceptionsFromDefinition(patternsDefinition, hyphenChar) {
        return patternsDefinition.exceptions.reduce(function(exceptions, exception) {
            exceptions[exception.replace(/\-/g, "")] = exception.replace(/\-/g, hyphenChar);
            return exceptions;
        }, {});
    }
    function createHyphenator(patternsDefinition, options) {
        options = options || {};
        var asyncMode = keyOrDefault(options, SETTING_NAME_ASYNC, SETTING_DEFAULT_ASYNC), caches = {}, debug = keyOrDefault(options, SETTING_NAME_DEBUG, SETTING_DEFAULT_DEBUG), exceptions = {}, hyphenChar = keyOrDefault(options, SETTING_NAME_HYPH_CHAR, SETTING_DEFAULT_HYPH_CHAR), patterns = patternsDefinition.patterns.map(preprocessPattern), minWordLength = keyOrDefault(options, SETTING_NAME_MIN_WORD_LENGTH, SETTING_DEFAULT_MIN_WORD_LENGTH) >> 0, skipHTML = keyOrDefault(options, SETTING_NAME_HTML, SETTING_DEFAULT_HTML);
        // Prepare cache
        var cacheKey = hyphenChar + minWordLength;
        exceptions[cacheKey] = exceptionsFromDefinition(patternsDefinition, hyphenChar);
        caches[cacheKey] = cloneObj(exceptions[cacheKey]);
        if (asyncMode && !("Promise" in _global)) throw new Error("Failed to create hyphenator: Could not find global Promise object, needed for hyphenator to work in async mode");
        return function(text, options) {
            options = options || {};
            var localDebug = keyOrDefault(options, SETTING_NAME_DEBUG, debug), localHyphenChar = keyOrDefault(options, SETTING_NAME_HYPH_CHAR, hyphenChar), localMinWordLength = keyOrDefault(options, SETTING_NAME_MIN_WORD_LENGTH, minWordLength) >> 0, cacheKey = localHyphenChar + localMinWordLength;
            if (!exceptions[cacheKey]) exceptions[cacheKey] = exceptionsFromDefinition(patternsDefinition, localHyphenChar);
            if (!caches[cacheKey]) caches[cacheKey] = cloneObj(exceptions[cacheKey]);
            return start(text, patterns, caches[cacheKey], localDebug, localHyphenChar, skipHTML, localMinWordLength, asyncMode);
        };
    }
    function createTextChunkReader(text, hyphenChar, skipHTML, minWordLength) {
        function readNextTextChunk() {
            var nextTextChunk = "";
            shouldHyphenate = void 0;
            chunkReader: while(nextCharIndex <= text.length){
                var nextChar = text.charAt(nextCharIndex++), charIsLetter = !!nextChar && !/\s|[\!-\@\[-\`\{-\~\u2013-\u203C]/.test(nextChar), charIsAngleOpen = nextChar === "<", charIsAngleClose = nextChar === ">", charIsHyphen = nextChar === hyphenChar;
                do {
                    if (state === STATE_READ_TAG) {
                        if (charIsAngleClose) state = STATE_RETURN_UNTOUCHED;
                        break;
                    }
                    if (charIsHyphen) {
                        shouldHyphenate = SHOULD_SKIP;
                        state = STATE_READ_WORD;
                        break;
                    }
                    if (charIsLetter) {
                        state = STATE_READ_WORD;
                        break;
                    }
                    if (state === STATE_READ_WORD) {
                        state = STATE_RETURN_WORD;
                        shouldHyphenate = shouldHyphenate || nextTextChunk.length >= minWordLength && SHOULD_HYPHENATE;
                        break;
                    }
                    shouldHyphenate = SHOULD_SKIP;
                    state = STATE_RETURN_UNTOUCHED;
                }while (0);
                if (charIsAngleOpen && state !== STATE_RETURN_WORD && skipHTML && !isSpacelike(text.charAt(nextCharIndex))) {
                    shouldHyphenate = SHOULD_SKIP;
                    state = STATE_READ_TAG;
                }
                switch(state){
                    case STATE_READ_TAG:
                        nextTextChunk += nextChar;
                        break;
                    case STATE_READ_WORD:
                        nextTextChunk += nextChar;
                        break;
                    case STATE_RETURN_UNTOUCHED:
                        nextTextChunk += nextChar;
                        break chunkReader;
                    case STATE_RETURN_WORD:
                        nextCharIndex--;
                        break chunkReader;
                }
            }
            return nextTextChunk || void 0;
        }
        function shouldNextHyphenate() {
            return shouldHyphenate === SHOULD_HYPHENATE;
        }
        var isSpacelike = RegExp.prototype.test.bind(/\s/);
        var nextCharIndex = 0, SHOULD_HYPHENATE = 1, SHOULD_SKIP = 2, shouldHyphenate, STATE_READ_TAG = 1, STATE_READ_WORD = 2, STATE_RETURN_UNTOUCHED = 3, STATE_RETURN_WORD = 4, state;
        return [
            readNextTextChunk,
            shouldNextHyphenate
        ];
    }
    function hyphenateWord(text, patterns, debug, hyphenChar) {
        var levels = new Array(text.length + 1), loweredText = text.toLocaleLowerCase(), p = [], patternData, patternIndex = 0;
        for(var i = levels.length; i--;)levels[i] = 0;
        while(patternData = patterns[patternIndex++]){
            var fromChar = 0, endPattern = false;
            while(!endPattern){
                var patternEntityIndex = loweredText.indexOf(patternData.text, fromChar), patternFits = patternEntityIndex > -1 && (patternData.stickToLeft ? patternEntityIndex === 0 : true) && (patternData.stickToRight ? patternEntityIndex + patternData.text.length === text.length : true);
                if (patternFits) {
                    p.push(patternData.pattern + ">" + patternData.levels.join(""));
                    for(var i = 0; i < patternData.levels.length; i++)levels[patternEntityIndex + i] = Math.max(patternData.levels[i], levels[patternEntityIndex + i]);
                }
                if (patternEntityIndex > -1 && patternData.text.length > 0) fromChar = patternEntityIndex + patternData.text.length + 1;
                else endPattern = true;
            }
        }
        levels[0] = levels[1] = levels[levels.length - 1] = levels[levels.length - 2] = 0;
        var hyphenatedText = "", leveledText = "", debugHyphenatedText = "";
        for(var i = 0; i < levels.length; i++){
            hyphenatedText += (levels[i] % 2 === 1 ? hyphenChar : "") + text.charAt(i);
            if (debug) {
                debugHyphenatedText += (levels[i] % 2 === 1 ? "-" : "") + text.charAt(i);
                leveledText += (levels[i] > 0 ? levels[i] : "") + text.charAt(i);
            }
        }
        if (debug) console.log.apply(console, [
            text,
            "->"
        ].concat(p).concat([
            "->"
        ]).concat(levels).concat([
            "->",
            leveledText
        ]).concat([
            "->",
            debugHyphenatedText
        ]));
        return hyphenatedText;
    }
    function preprocessPattern(pattern) {
        var patternCharIndex = 0, patternChar, patternData = {
            pattern: pattern,
            text: "",
            levels: [],
            stickToLeft: 0,
            stickToRight: 0
        }, states = {
            alphabet: 1,
            level: 2,
            stickToLeft: 3,
            stickToRight: 4
        };
        while(patternChar = pattern.charAt(patternCharIndex++)){
            var charIsDot = patternChar === ".", charIsNumber = !charIsDot && /\d/.test(patternChar), state = charIsDot ? patternCharIndex - 1 === 0 ? states.stickToLeft : states.stickToRight : charIsNumber ? states.level : states.alphabet;
            switch(state){
                case states.alphabet:
                    !prevCharIsNumber && patternData.levels.push(0);
                    patternData.text += patternChar;
                    break;
                case states.level:
                    patternData.levels.push(parseInt(patternChar));
                    break;
                case states.stickToLeft:
                    patternData.stickToLeft = true;
                    break;
                case states.stickToRight:
                    patternData.stickToRight = true;
                    break;
            }
            var prevCharIsNumber = charIsNumber;
        }
        return patternData;
    }
    function start(text, patterns, cache, debug, hyphenChar, skipHTML, minWordLength, isAsync) {
        function done() {
            allTime = new Date() - allTime;
            resolveNewText(newText);
            if (debug) {
                console.log("----------------\nHyphenation stats: " + processedN + " text chunks processed, " + hyphenatedN + " words hyphenated");
                console.log("Work time: " + workTime / 1000);
                console.log("Wait time: " + (allTime - workTime) / 1000);
                console.log("All time: " + allTime / 1000);
            }
        }
        var cacheKey, newText = "", textChunk, reader = createTextChunkReader(text, hyphenChar, skipHTML, minWordLength), readNextTextChunk = reader[0], shouldNextHyphenate = reader[1], processedN = 0, hyphenatedN = 0;
        var allTime = new Date(), workTime = 0;
        var resolveNewText = function() {};
        function nextTick() {
            var loopStart = new Date();
            while((!isAsync || new Date() - loopStart < 10) && (textChunk = readNextTextChunk())){
                cacheKey = textChunk.length ? "$" + textChunk : "";
                if (shouldNextHyphenate()) {
                    if (cache[cacheKey] === undefined) cache[cacheKey] = hyphenateWord(textChunk, patterns, debug, hyphenChar);
                    if (textChunk !== cache[cacheKey]) hyphenatedN++;
                    textChunk = cache[cacheKey];
                }
                newText += textChunk;
                processedN++;
            }
            workTime += new Date() - loopStart;
            if (!textChunk) done();
            else setTimeout(nextTick);
        }
        if (isAsync) {
            setTimeout(nextTick);
            return new Promise(function(resolve) {
                resolveNewText = resolve;
            });
        } else {
            nextTick();
            return newText;
        }
    }
    return createHyphenator;
});

},{}],"1ftxa":[function(require,module,exports) {
(function(root, factory) {
    if (typeof define === "function" && define.amd) // AMD. Register as an anonymous module.
    define([], factory);
    else if (0, module.exports) // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
    else // Browser globals (root is window)
    root.hyphenationPatternsEnUs = factory();
})(this, function() {
    var patterns = [], hyphenation = [];
    // title: Hyphenation patterns for American English
    // copyright: Copyright (C) 1990, 2004, 2005 Gerard D.C. Kuiken
    // notice: This file is part of the hyph-utf8 package.
    //     See http://www.hyphenation.org/tex for more information.
    // language:
    //     name: English, American spelling
    //     tag: en-us
    // version: 2005-05-30
    // authors:
    //   -
    //     name: Gerard D.C. Kuiken
    // licence:
    //     text: >
    //         Copying and distribution of this file, with or without modification,
    //         are permitted in any medium without royalty provided the copyright
    //         notice and this notice are preserved.
    // changes:
    //     March 1, 1990 Initial release
    //     May 30, 2005 Added copyright notice, no patterns change.
    // ==========================================
    //
    // ushyphmax.tex -- patterns for more hyphenation pattern memory (12000+).
    // Also known as ushyphen.max.
    //
    // Needs extended pattern memory.
    // Hyphenation trie becomes 7283 with 377 ops.
    //
    // These patterns are based on the Hyphenation Exception Log
    // published in TUGboat, Volume 10 (1989), No. 3, pp. 337-341,
    // and a large number of incorrectly hyphenated words not yet published.
    // If added to Liang's before the closing bracket } of \patterns,
    // the patterns run errorfree as far as known at this moment.
    //
    // These patterns find all admissible hyphens of the words in
    // the Exception Log.  ushyph2.tex is a smaller set.
    //
    // Please send bugs or suggestions to tex-live (at) tug.org.
    //
    // 2005-05-30 (karl): in the past, ushyphmax.tex was a file containing
    // only the additional patterns, without the \patterns command, etc.
    // This turned out not to be very useful, since in practice the TeX
    // distributions need one self-contained file for a language.  Therefore,
    // ushyphmax.tex now contains both the additional patterns from
    // Dr. Kuiken, and the original patterns and hyphenations from Knuth's
    // hyphen.tex.
    //
    // The Plain TeX hyphenation tables.
    var patterns = [
        " ",
        ".ach4",
        ".ad4der",
        ".af1t",
        ".al3t",
        ".am5at",
        ".an5c",
        ".ang4",
        ".ani5m",
        ".ant4",
        ".an3te",
        ".anti5s",
        ".ar5s",
        ".ar4tie",
        ".ar4ty",
        ".as3c",
        ".as1p",
        ".as1s",
        ".aster5",
        ".atom5",
        ".au1d",
        ".av4i",
        ".awn4",
        ".ba4g",
        ".ba5na",
        ".bas4e",
        ".ber4",
        ".be5ra",
        ".be3sm",
        ".be5sto",
        ".bri2",
        ".but4ti",
        ".cam4pe",
        ".can5c",
        ".capa5b",
        ".car5ol",
        ".ca4t",
        ".ce4la",
        ".ch4",
        ".chill5i",
        ".ci2",
        ".cit5r",
        ".co3e",
        ".co4r",
        ".cor5ner",
        ".de4moi",
        ".de3o",
        ".de3ra",
        ".de3ri",
        ".des4c",
        ".dictio5",
        ".do4t",
        ".du4c",
        ".dumb5",
        ".earth5",
        ".eas3i",
        ".eb4",
        ".eer4",
        ".eg2",
        ".el5d",
        ".el3em",
        ".enam3",
        ".en3g",
        ".en3s",
        ".eq5ui5t",
        ".er4ri",
        ".es3",
        ".eu3",
        ".eye5",
        ".fes3",
        ".for5mer",
        ".ga2",
        ".ge2",
        ".gen3t4",
        ".ge5og",
        ".gi5a",
        ".gi4b",
        ".go4r",
        ".hand5i",
        ".han5k",
        ".he2",
        ".hero5i",
        ".hes3",
        ".het3",
        ".hi3b",
        ".hi3er",
        ".hon5ey",
        ".hon3o",
        ".hov5",
        ".id4l",
        ".idol3",
        ".im3m",
        ".im5pin",
        ".in1",
        ".in3ci",
        ".ine2",
        ".in2k",
        ".in3s",
        ".ir5r",
        ".is4i",
        ".ju3r",
        ".la4cy",
        ".la4m",
        ".lat5er",
        ".lath5",
        ".le2",
        ".leg5e",
        ".len4",
        ".lep5",
        ".lev1",
        ".li4g",
        ".lig5a",
        ".li2n",
        ".li3o",
        ".li4t",
        ".mag5a5",
        ".mal5o",
        ".man5a",
        ".mar5ti",
        ".me2",
        ".mer3c",
        ".me5ter",
        ".mis1",
        ".mist5i",
        ".mon3e",
        ".mo3ro",
        ".mu5ta",
        ".muta5b",
        ".ni4c",
        ".od2",
        ".odd5",
        ".of5te",
        ".or5ato",
        ".or3c",
        ".or1d",
        ".or3t",
        ".os3",
        ".os4tl",
        ".oth3",
        ".out3",
        ".ped5al",
        ".pe5te",
        ".pe5tit",
        ".pi4e",
        ".pio5n",
        ".pi2t",
        ".pre3m",
        ".ra4c",
        ".ran4t",
        ".ratio5na",
        ".ree2",
        ".re5mit",
        ".res2",
        ".re5stat",
        ".ri4g",
        ".rit5u",
        ".ro4q",
        ".ros5t",
        ".row5d",
        ".ru4d",
        ".sci3e",
        ".self5",
        ".sell5",
        ".se2n",
        ".se5rie",
        ".sh2",
        ".si2",
        ".sing4",
        ".st4",
        ".sta5bl",
        ".sy2",
        ".ta4",
        ".te4",
        ".ten5an",
        ".th2",
        ".ti2",
        ".til4",
        ".tim5o5",
        ".ting4",
        ".tin5k",
        ".ton4a",
        ".to4p",
        ".top5i",
        ".tou5s",
        ".trib5ut",
        ".un1a",
        ".un3ce",
        ".under5",
        ".un1e",
        ".un5k",
        ".un5o",
        ".un3u",
        ".up3",
        ".ure3",
        ".us5a",
        ".ven4de",
        ".ve5ra",
        ".wil5i",
        ".ye4",
        "4ab.",
        "a5bal",
        "a5ban",
        "abe2",
        "ab5erd",
        "abi5a",
        "ab5it5ab",
        "ab5lat",
        "ab5o5liz",
        "4abr",
        "ab5rog",
        "ab3ul",
        "a4car",
        "ac5ard",
        "ac5aro",
        "a5ceou",
        "ac1er",
        "a5chet",
        "4a2ci",
        "a3cie",
        "ac1in",
        "a3cio",
        "ac5rob",
        "act5if",
        "ac3ul",
        "ac4um",
        "a2d",
        "ad4din",
        "ad5er.",
        "2adi",
        "a3dia",
        "ad3ica",
        "adi4er",
        "a3dio",
        "a3dit",
        "a5diu",
        "ad4le",
        "ad3ow",
        "ad5ran",
        "ad4su",
        "4adu",
        "a3duc",
        "ad5um",
        "ae4r",
        "aeri4e",
        "a2f",
        "aff4",
        "a4gab",
        "aga4n",
        "ag5ell",
        "age4o",
        "4ageu",
        "ag1i",
        "4ag4l",
        "ag1n",
        "a2go",
        "3agog",
        "ag3oni",
        "a5guer",
        "ag5ul",
        "a4gy",
        "a3ha",
        "a3he",
        "ah4l",
        "a3ho",
        "ai2",
        "a5ia",
        "a3ic.",
        "ai5ly",
        "a4i4n",
        "ain5in",
        "ain5o",
        "ait5en",
        "a1j",
        "ak1en",
        "al5ab",
        "al3ad",
        "a4lar",
        "4aldi",
        "2ale",
        "al3end",
        "a4lenti",
        "a5le5o",
        "al1i",
        "al4ia.",
        "ali4e",
        "al5lev",
        "4allic",
        "4alm",
        "a5log.",
        "a4ly.",
        "4alys",
        "5a5lyst",
        "5alyt",
        "3alyz",
        "4ama",
        "am5ab",
        "am3ag",
        "ama5ra",
        "am5asc",
        "a4matis",
        "a4m5ato",
        "am5era",
        "am3ic",
        "am5if",
        "am5ily",
        "am1in",
        "ami4no",
        "a2mo",
        "a5mon",
        "amor5i",
        "amp5en",
        "a2n",
        "an3age",
        "3analy",
        "a3nar",
        "an3arc",
        "anar4i",
        "a3nati",
        "4and",
        "ande4s",
        "an3dis",
        "an1dl",
        "an4dow",
        "a5nee",
        "a3nen",
        "an5est.",
        "a3neu",
        "2ang",
        "ang5ie",
        "an1gl",
        "a4n1ic",
        "a3nies",
        "an3i3f",
        "an4ime",
        "a5nimi",
        "a5nine",
        "an3io",
        "a3nip",
        "an3ish",
        "an3it",
        "a3niu",
        "an4kli",
        "5anniz",
        "ano4",
        "an5ot",
        "anoth5",
        "an2sa",
        "an4sco",
        "an4sn",
        "an2sp",
        "ans3po",
        "an4st",
        "an4sur",
        "antal4",
        "an4tie",
        "4anto",
        "an2tr",
        "an4tw",
        "an3ua",
        "an3ul",
        "a5nur",
        "4ao",
        "apar4",
        "ap5at",
        "ap5ero",
        "a3pher",
        "4aphi",
        "a4pilla",
        "ap5illar",
        "ap3in",
        "ap3ita",
        "a3pitu",
        "a2pl",
        "apoc5",
        "ap5ola",
        "apor5i",
        "apos3t",
        "aps5es",
        "a3pu",
        "aque5",
        "2a2r",
        "ar3act",
        "a5rade",
        "ar5adis",
        "ar3al",
        "a5ramete",
        "aran4g",
        "ara3p",
        "ar4at",
        "a5ratio",
        "ar5ativ",
        "a5rau",
        "ar5av4",
        "araw4",
        "arbal4",
        "ar4chan",
        "ar5dine",
        "ar4dr",
        "ar5eas",
        "a3ree",
        "ar3ent",
        "a5ress",
        "ar4fi",
        "ar4fl",
        "ar1i",
        "ar5ial",
        "ar3ian",
        "a3riet",
        "ar4im",
        "ar5inat",
        "ar3io",
        "ar2iz",
        "ar2mi",
        "ar5o5d",
        "a5roni",
        "a3roo",
        "ar2p",
        "ar3q",
        "arre4",
        "ar4sa",
        "ar2sh",
        "4as.",
        "as4ab",
        "as3ant",
        "ashi4",
        "a5sia.",
        "a3sib",
        "a3sic",
        "5a5si4t",
        "ask3i",
        "as4l",
        "a4soc",
        "as5ph",
        "as4sh",
        "as3ten",
        "as1tr",
        "asur5a",
        "a2ta",
        "at3abl",
        "at5ac",
        "at3alo",
        "at5ap",
        "ate5c",
        "at5ech",
        "at3ego",
        "at3en.",
        "at3era",
        "ater5n",
        "a5terna",
        "at3est",
        "at5ev",
        "4ath",
        "ath5em",
        "a5then",
        "at4ho",
        "ath5om",
        "4ati.",
        "a5tia",
        "at5i5b",
        "at1ic",
        "at3if",
        "ation5ar",
        "at3itu",
        "a4tog",
        "a2tom",
        "at5omiz",
        "a4top",
        "a4tos",
        "a1tr",
        "at5rop",
        "at4sk",
        "at4tag",
        "at5te",
        "at4th",
        "a2tu",
        "at5ua",
        "at5ue",
        "at3ul",
        "at3ura",
        "a2ty",
        "au4b",
        "augh3",
        "au3gu",
        "au4l2",
        "aun5d",
        "au3r",
        "au5sib",
        "aut5en",
        "au1th",
        "a2va",
        "av3ag",
        "a5van",
        "ave4no",
        "av3era",
        "av5ern",
        "av5ery",
        "av1i",
        "avi4er",
        "av3ig",
        "av5oc",
        "a1vor",
        "3away",
        "aw3i",
        "aw4ly",
        "aws4",
        "ax4ic",
        "ax4id",
        "ay5al",
        "aye4",
        "ays4",
        "azi4er",
        "azz5i",
        "5ba.",
        "bad5ger",
        "ba4ge",
        "bal1a",
        "ban5dag",
        "ban4e",
        "ban3i",
        "barbi5",
        "bari4a",
        "bas4si",
        "1bat",
        "ba4z",
        "2b1b",
        "b2be",
        "b3ber",
        "bbi4na",
        "4b1d",
        "4be.",
        "beak4",
        "beat3",
        "4be2d",
        "be3da",
        "be3de",
        "be3di",
        "be3gi",
        "be5gu",
        "1bel",
        "be1li",
        "be3lo",
        "4be5m",
        "be5nig",
        "be5nu",
        "4bes4",
        "be3sp",
        "be5str",
        "3bet",
        "bet5iz",
        "be5tr",
        "be3tw",
        "be3w",
        "be5yo",
        "2bf",
        "4b3h",
        "bi2b",
        "bi4d",
        "3bie",
        "bi5en",
        "bi4er",
        "2b3if",
        "1bil",
        "bi3liz",
        "bina5r4",
        "bin4d",
        "bi5net",
        "bi3ogr",
        "bi5ou",
        "bi2t",
        "3bi3tio",
        "bi3tr",
        "3bit5ua",
        "b5itz",
        "b1j",
        "bk4",
        "b2l2",
        "blath5",
        "b4le.",
        "blen4",
        "5blesp",
        "b3lis",
        "b4lo",
        "blun4t",
        "4b1m",
        "4b3n",
        "bne5g",
        "3bod",
        "bod3i",
        "bo4e",
        "bol3ic",
        "bom4bi",
        "bon4a",
        "bon5at",
        "3boo",
        "5bor.",
        "4b1ora",
        "bor5d",
        "5bore",
        "5bori",
        "5bos4",
        "b5ota",
        "both5",
        "bo4to",
        "bound3",
        "4bp",
        "4brit",
        "broth3",
        "2b5s2",
        "bsor4",
        "2bt",
        "bt4l",
        "b4to",
        "b3tr",
        "buf4fer",
        "bu4ga",
        "bu3li",
        "bumi4",
        "bu4n",
        "bunt4i",
        "bu3re",
        "bus5ie",
        "buss4e",
        "5bust",
        "4buta",
        "3butio",
        "b5uto",
        "b1v",
        "4b5w",
        "5by.",
        "bys4",
        "1ca",
        "cab3in",
        "ca1bl",
        "cach4",
        "ca5den",
        "4cag4",
        "2c5ah",
        "ca3lat",
        "cal4la",
        "call5in",
        "4calo",
        "can5d",
        "can4e",
        "can4ic",
        "can5is",
        "can3iz",
        "can4ty",
        "cany4",
        "ca5per",
        "car5om",
        "cast5er",
        "cas5tig",
        "4casy",
        "ca4th",
        "4cativ",
        "cav5al",
        "c3c",
        "ccha5",
        "cci4a",
        "ccompa5",
        "ccon4",
        "ccou3t",
        "2ce.",
        "4ced.",
        "4ceden",
        "3cei",
        "5cel.",
        "3cell",
        "1cen",
        "3cenc",
        "2cen4e",
        "4ceni",
        "3cent",
        "3cep",
        "ce5ram",
        "4cesa",
        "3cessi",
        "ces5si5b",
        "ces5t",
        "cet4",
        "c5e4ta",
        "cew4",
        "2ch",
        "4ch.",
        "4ch3ab",
        "5chanic",
        "ch5a5nis",
        "che2",
        "cheap3",
        "4ched",
        "che5lo",
        "3chemi",
        "ch5ene",
        "ch3er.",
        "ch3ers",
        "4ch1in",
        "5chine.",
        "ch5iness",
        "5chini",
        "5chio",
        "3chit",
        "chi2z",
        "3cho2",
        "ch4ti",
        "1ci",
        "3cia",
        "ci2a5b",
        "cia5r",
        "ci5c",
        "4cier",
        "5cific.",
        "4cii",
        "ci4la",
        "3cili",
        "2cim",
        "2cin",
        "c4ina",
        "3cinat",
        "cin3em",
        "c1ing",
        "c5ing.",
        "5cino",
        "cion4",
        "4cipe",
        "ci3ph",
        "4cipic",
        "4cista",
        "4cisti",
        "2c1it",
        "cit3iz",
        "5ciz",
        "ck1",
        "ck3i",
        "1c4l4",
        "4clar",
        "c5laratio",
        "5clare",
        "cle4m",
        "4clic",
        "clim4",
        "cly4",
        "c5n",
        "1co",
        "co5ag",
        "coe2",
        "2cog",
        "co4gr",
        "coi4",
        "co3inc",
        "col5i",
        "5colo",
        "col3or",
        "com5er",
        "con4a",
        "c4one",
        "con3g",
        "con5t",
        "co3pa",
        "cop3ic",
        "co4pl",
        "4corb",
        "coro3n",
        "cos4e",
        "cov1",
        "cove4",
        "cow5a",
        "coz5e",
        "co5zi",
        "c1q",
        "cras5t",
        "5crat.",
        "5cratic",
        "cre3at",
        "5cred",
        "4c3reta",
        "cre4v",
        "cri2",
        "cri5f",
        "c4rin",
        "cris4",
        "5criti",
        "cro4pl",
        "crop5o",
        "cros4e",
        "cru4d",
        "4c3s2",
        "2c1t",
        "cta4b",
        "ct5ang",
        "c5tant",
        "c2te",
        "c3ter",
        "c4ticu",
        "ctim3i",
        "ctu4r",
        "c4tw",
        "cud5",
        "c4uf",
        "c4ui",
        "cu5ity",
        "5culi",
        "cul4tis",
        "3cultu",
        "cu2ma",
        "c3ume",
        "cu4mi",
        "3cun",
        "cu3pi",
        "cu5py",
        "cur5a4b",
        "cu5ria",
        "1cus",
        "cuss4i",
        "3c4ut",
        "cu4tie",
        "4c5utiv",
        "4cutr",
        "1cy",
        "cze4",
        "1d2a",
        "5da.",
        "2d3a4b",
        "dach4",
        "4daf",
        "2dag",
        "da2m2",
        "dan3g",
        "dard5",
        "dark5",
        "4dary",
        "3dat",
        "4dativ",
        "4dato",
        "5dav4",
        "dav5e",
        "5day",
        "d1b",
        "d5c",
        "d1d4",
        "2de.",
        "deaf5",
        "deb5it",
        "de4bon",
        "decan4",
        "de4cil",
        "de5com",
        "2d1ed",
        "4dee.",
        "de5if",
        "deli4e",
        "del5i5q",
        "de5lo",
        "d4em",
        "5dem.",
        "3demic",
        "dem5ic.",
        "de5mil",
        "de4mons",
        "demor5",
        "1den",
        "de4nar",
        "de3no",
        "denti5f",
        "de3nu",
        "de1p",
        "de3pa",
        "depi4",
        "de2pu",
        "d3eq",
        "d4erh",
        "5derm",
        "dern5iz",
        "der5s",
        "des2",
        "d2es.",
        "de1sc",
        "de2s5o",
        "des3ti",
        "de3str",
        "de4su",
        "de1t",
        "de2to",
        "de1v",
        "dev3il",
        "4dey",
        "4d1f",
        "d4ga",
        "d3ge4t",
        "dg1i",
        "d2gy",
        "d1h2",
        "5di.",
        "1d4i3a",
        "dia5b",
        "di4cam",
        "d4ice",
        "3dict",
        "3did",
        "5di3en",
        "d1if",
        "di3ge",
        "di4lato",
        "d1in",
        "1dina",
        "3dine.",
        "5dini",
        "di5niz",
        "1dio",
        "dio5g",
        "di4pl",
        "dir2",
        "di1re",
        "dirt5i",
        "dis1",
        "5disi",
        "d4is3t",
        "d2iti",
        "1di1v",
        "d1j",
        "d5k2",
        "4d5la",
        "3dle.",
        "3dled",
        "3dles.",
        "4dless",
        "2d3lo",
        "4d5lu",
        "2dly",
        "d1m",
        "4d1n4",
        "1do",
        "3do.",
        "do5de",
        "5doe",
        "2d5of",
        "d4og",
        "do4la",
        "doli4",
        "do5lor",
        "dom5iz",
        "do3nat",
        "doni4",
        "doo3d",
        "dop4p",
        "d4or",
        "3dos",
        "4d5out",
        "do4v",
        "3dox",
        "d1p",
        "1dr",
        "drag5on",
        "4drai",
        "dre4",
        "drea5r",
        "5dren",
        "dri4b",
        "dril4",
        "dro4p",
        "4drow",
        "5drupli",
        "4dry",
        "2d1s2",
        "ds4p",
        "d4sw",
        "d4sy",
        "d2th",
        "1du",
        "d1u1a",
        "du2c",
        "d1uca",
        "duc5er",
        "4duct.",
        "4ducts",
        "du5el",
        "du4g",
        "d3ule",
        "dum4be",
        "du4n",
        "4dup",
        "du4pe",
        "d1v",
        "d1w",
        "d2y",
        "5dyn",
        "dy4se",
        "dys5p",
        "e1a4b",
        "e3act",
        "ead1",
        "ead5ie",
        "ea4ge",
        "ea5ger",
        "ea4l",
        "eal5er",
        "eal3ou",
        "eam3er",
        "e5and",
        "ear3a",
        "ear4c",
        "ear5es",
        "ear4ic",
        "ear4il",
        "ear5k",
        "ear2t",
        "eart3e",
        "ea5sp",
        "e3ass",
        "east3",
        "ea2t",
        "eat5en",
        "eath3i",
        "e5atif",
        "e4a3tu",
        "ea2v",
        "eav3en",
        "eav5i",
        "eav5o",
        "2e1b",
        "e4bel.",
        "e4bels",
        "e4ben",
        "e4bit",
        "e3br",
        "e4cad",
        "ecan5c",
        "ecca5",
        "e1ce",
        "ec5essa",
        "ec2i",
        "e4cib",
        "ec5ificat",
        "ec5ifie",
        "ec5ify",
        "ec3im",
        "eci4t",
        "e5cite",
        "e4clam",
        "e4clus",
        "e2col",
        "e4comm",
        "e4compe",
        "e4conc",
        "e2cor",
        "ec3ora",
        "eco5ro",
        "e1cr",
        "e4crem",
        "ec4tan",
        "ec4te",
        "e1cu",
        "e4cul",
        "ec3ula",
        "2e2da",
        "4ed3d",
        "e4d1er",
        "ede4s",
        "4edi",
        "e3dia",
        "ed3ib",
        "ed3ica",
        "ed3im",
        "ed1it",
        "edi5z",
        "4edo",
        "e4dol",
        "edon2",
        "e4dri",
        "e4dul",
        "ed5ulo",
        "ee2c",
        "eed3i",
        "ee2f",
        "eel3i",
        "ee4ly",
        "ee2m",
        "ee4na",
        "ee4p1",
        "ee2s4",
        "eest4",
        "ee4ty",
        "e5ex",
        "e1f",
        "e4f3ere",
        "1eff",
        "e4fic",
        "5efici",
        "efil4",
        "e3fine",
        "ef5i5nite",
        "3efit",
        "efor5es",
        "e4fuse.",
        "4egal",
        "eger4",
        "eg5ib",
        "eg4ic",
        "eg5ing",
        "e5git5",
        "eg5n",
        "e4go.",
        "e4gos",
        "eg1ul",
        "e5gur",
        "5egy",
        "e1h4",
        "eher4",
        "ei2",
        "e5ic",
        "ei5d",
        "eig2",
        "ei5gl",
        "e3imb",
        "e3inf",
        "e1ing",
        "e5inst",
        "eir4d",
        "eit3e",
        "ei3th",
        "e5ity",
        "e1j",
        "e4jud",
        "ej5udi",
        "eki4n",
        "ek4la",
        "e1la",
        "e4la.",
        "e4lac",
        "elan4d",
        "el5ativ",
        "e4law",
        "elaxa4",
        "e3lea",
        "el5ebra",
        "5elec",
        "e4led",
        "el3ega",
        "e5len",
        "e4l1er",
        "e1les",
        "el2f",
        "el2i",
        "e3libe",
        "e4l5ic.",
        "el3ica",
        "e3lier",
        "el5igib",
        "e5lim",
        "e4l3ing",
        "e3lio",
        "e2lis",
        "el5ish",
        "e3liv3",
        "4ella",
        "el4lab",
        "ello4",
        "e5loc",
        "el5og",
        "el3op.",
        "el2sh",
        "el4ta",
        "e5lud",
        "el5ug",
        "e4mac",
        "e4mag",
        "e5man",
        "em5ana",
        "em5b",
        "e1me",
        "e2mel",
        "e4met",
        "em3ica",
        "emi4e",
        "em5igra",
        "em1in2",
        "em5ine",
        "em3i3ni",
        "e4mis",
        "em5ish",
        "e5miss",
        "em3iz",
        "5emniz",
        "emo4g",
        "emoni5o",
        "em3pi",
        "e4mul",
        "em5ula",
        "emu3n",
        "e3my",
        "en5amo",
        "e4nant",
        "ench4er",
        "en3dic",
        "e5nea",
        "e5nee",
        "en3em",
        "en5ero",
        "en5esi",
        "en5est",
        "en3etr",
        "e3new",
        "en5ics",
        "e5nie",
        "e5nil",
        "e3nio",
        "en3ish",
        "en3it",
        "e5niu",
        "5eniz",
        "4enn",
        "4eno",
        "eno4g",
        "e4nos",
        "en3ov",
        "en4sw",
        "ent5age",
        "4enthes",
        "en3ua",
        "en5uf",
        "e3ny.",
        "4en3z",
        "e5of",
        "eo2g",
        "e4oi4",
        "e3ol",
        "eop3ar",
        "e1or",
        "eo3re",
        "eo5rol",
        "eos4",
        "e4ot",
        "eo4to",
        "e5out",
        "e5ow",
        "e2pa",
        "e3pai",
        "ep5anc",
        "e5pel",
        "e3pent",
        "ep5etitio",
        "ephe4",
        "e4pli",
        "e1po",
        "e4prec",
        "ep5reca",
        "e4pred",
        "ep3reh",
        "e3pro",
        "e4prob",
        "ep4sh",
        "ep5ti5b",
        "e4put",
        "ep5uta",
        "e1q",
        "equi3l",
        "e4q3ui3s",
        "er1a",
        "era4b",
        "4erand",
        "er3ar",
        "4erati.",
        "2erb",
        "er4bl",
        "er3ch",
        "er4che",
        "2ere.",
        "e3real",
        "ere5co",
        "ere3in",
        "er5el.",
        "er3emo",
        "er5ena",
        "er5ence",
        "4erene",
        "er3ent",
        "ere4q",
        "er5ess",
        "er3est",
        "eret4",
        "er1h",
        "er1i",
        "e1ria4",
        "5erick",
        "e3rien",
        "eri4er",
        "er3ine",
        "e1rio",
        "4erit",
        "er4iu",
        "eri4v",
        "e4riva",
        "er3m4",
        "er4nis",
        "4ernit",
        "5erniz",
        "er3no",
        "2ero",
        "er5ob",
        "e5roc",
        "ero4r",
        "er1ou",
        "er1s",
        "er3set",
        "ert3er",
        "4ertl",
        "er3tw",
        "4eru",
        "eru4t",
        "5erwau",
        "e1s4a",
        "e4sage.",
        "e4sages",
        "es2c",
        "e2sca",
        "es5can",
        "e3scr",
        "es5cu",
        "e1s2e",
        "e2sec",
        "es5ecr",
        "es5enc",
        "e4sert.",
        "e4serts",
        "e4serva",
        "4esh",
        "e3sha",
        "esh5en",
        "e1si",
        "e2sic",
        "e2sid",
        "es5iden",
        "es5igna",
        "e2s5im",
        "es4i4n",
        "esis4te",
        "esi4u",
        "e5skin",
        "es4mi",
        "e2sol",
        "es3olu",
        "e2son",
        "es5ona",
        "e1sp",
        "es3per",
        "es5pira",
        "es4pre",
        "2ess",
        "es4si4b",
        "estan4",
        "es3tig",
        "es5tim",
        "4es2to",
        "e3ston",
        "2estr",
        "e5stro",
        "estruc5",
        "e2sur",
        "es5urr",
        "es4w",
        "eta4b",
        "eten4d",
        "e3teo",
        "ethod3",
        "et1ic",
        "e5tide",
        "etin4",
        "eti4no",
        "e5tir",
        "e5titio",
        "et5itiv",
        "4etn",
        "et5ona",
        "e3tra",
        "e3tre",
        "et3ric",
        "et5rif",
        "et3rog",
        "et5ros",
        "et3ua",
        "et5ym",
        "et5z",
        "4eu",
        "e5un",
        "e3up",
        "eu3ro",
        "eus4",
        "eute4",
        "euti5l",
        "eu5tr",
        "eva2p5",
        "e2vas",
        "ev5ast",
        "e5vea",
        "ev3ell",
        "evel3o",
        "e5veng",
        "even4i",
        "ev1er",
        "e5verb",
        "e1vi",
        "ev3id",
        "evi4l",
        "e4vin",
        "evi4v",
        "e5voc",
        "e5vu",
        "e1wa",
        "e4wag",
        "e5wee",
        "e3wh",
        "ewil5",
        "ew3ing",
        "e3wit",
        "1exp",
        "5eyc",
        "5eye.",
        "eys4",
        "1fa",
        "fa3bl",
        "fab3r",
        "fa4ce",
        "4fag",
        "fain4",
        "fall5e",
        "4fa4ma",
        "fam5is",
        "5far",
        "far5th",
        "fa3ta",
        "fa3the",
        "4fato",
        "fault5",
        "4f5b",
        "4fd",
        "4fe.",
        "feas4",
        "feath3",
        "fe4b",
        "4feca",
        "5fect",
        "2fed",
        "fe3li",
        "fe4mo",
        "fen2d",
        "fend5e",
        "fer1",
        "5ferr",
        "fev4",
        "4f1f",
        "f4fes",
        "f4fie",
        "f5fin.",
        "f2f5is",
        "f4fly",
        "f2fy",
        "4fh",
        "1fi",
        "fi3a",
        "2f3ic.",
        "4f3ical",
        "f3ican",
        "4ficate",
        "f3icen",
        "fi3cer",
        "fic4i",
        "5ficia",
        "5ficie",
        "4fics",
        "fi3cu",
        "fi5del",
        "fight5",
        "fil5i",
        "fill5in",
        "4fily",
        "2fin",
        "5fina",
        "fin2d5",
        "fi2ne",
        "f1in3g",
        "fin4n",
        "fis4ti",
        "f4l2",
        "f5less",
        "flin4",
        "flo3re",
        "f2ly5",
        "4fm",
        "4fn",
        "1fo",
        "5fon",
        "fon4de",
        "fon4t",
        "fo2r",
        "fo5rat",
        "for5ay",
        "fore5t",
        "for4i",
        "fort5a",
        "fos5",
        "4f5p",
        "fra4t",
        "f5rea",
        "fres5c",
        "fri2",
        "fril4",
        "frol5",
        "2f3s",
        "2ft",
        "f4to",
        "f2ty",
        "3fu",
        "fu5el",
        "4fug",
        "fu4min",
        "fu5ne",
        "fu3ri",
        "fusi4",
        "fus4s",
        "4futa",
        "1fy",
        "1ga",
        "gaf4",
        "5gal.",
        "3gali",
        "ga3lo",
        "2gam",
        "ga5met",
        "g5amo",
        "gan5is",
        "ga3niz",
        "gani5za",
        "4gano",
        "gar5n4",
        "gass4",
        "gath3",
        "4gativ",
        "4gaz",
        "g3b",
        "gd4",
        "2ge.",
        "2ged",
        "geez4",
        "gel4in",
        "ge5lis",
        "ge5liz",
        "4gely",
        "1gen",
        "ge4nat",
        "ge5niz",
        "4geno",
        "4geny",
        "1geo",
        "ge3om",
        "g4ery",
        "5gesi",
        "geth5",
        "4geto",
        "ge4ty",
        "ge4v",
        "4g1g2",
        "g2ge",
        "g3ger",
        "gglu5",
        "ggo4",
        "gh3in",
        "gh5out",
        "gh4to",
        "5gi.",
        "1gi4a",
        "gia5r",
        "g1ic",
        "5gicia",
        "g4ico",
        "gien5",
        "5gies.",
        "gil4",
        "g3imen",
        "3g4in.",
        "gin5ge",
        "5g4ins",
        "5gio",
        "3gir",
        "gir4l",
        "g3isl",
        "gi4u",
        "5giv",
        "3giz",
        "gl2",
        "gla4",
        "glad5i",
        "5glas",
        "1gle",
        "gli4b",
        "g3lig",
        "3glo",
        "glo3r",
        "g1m",
        "g4my",
        "gn4a",
        "g4na.",
        "gnet4t",
        "g1ni",
        "g2nin",
        "g4nio",
        "g1no",
        "g4non",
        "1go",
        "3go.",
        "gob5",
        "5goe",
        "3g4o4g",
        "go3is",
        "gon2",
        "4g3o3na",
        "gondo5",
        "go3ni",
        "5goo",
        "go5riz",
        "gor5ou",
        "5gos.",
        "gov1",
        "g3p",
        "1gr",
        "4grada",
        "g4rai",
        "gran2",
        "5graph.",
        "g5rapher",
        "5graphic",
        "4graphy",
        "4gray",
        "gre4n",
        "4gress.",
        "4grit",
        "g4ro",
        "gruf4",
        "gs2",
        "g5ste",
        "gth3",
        "gu4a",
        "3guard",
        "2gue",
        "5gui5t",
        "3gun",
        "3gus",
        "4gu4t",
        "g3w",
        "1gy",
        "2g5y3n",
        "gy5ra",
        "h3ab4l",
        "hach4",
        "hae4m",
        "hae4t",
        "h5agu",
        "ha3la",
        "hala3m",
        "ha4m",
        "han4ci",
        "han4cy",
        "5hand.",
        "han4g",
        "hang5er",
        "hang5o",
        "h5a5niz",
        "han4k",
        "han4te",
        "hap3l",
        "hap5t",
        "ha3ran",
        "ha5ras",
        "har2d",
        "hard3e",
        "har4le",
        "harp5en",
        "har5ter",
        "has5s",
        "haun4",
        "5haz",
        "haz3a",
        "h1b",
        "1head",
        "3hear",
        "he4can",
        "h5ecat",
        "h4ed",
        "he5do5",
        "he3l4i",
        "hel4lis",
        "hel4ly",
        "h5elo",
        "hem4p",
        "he2n",
        "hena4",
        "hen5at",
        "heo5r",
        "hep5",
        "h4era",
        "hera3p",
        "her4ba",
        "here5a",
        "h3ern",
        "h5erou",
        "h3ery",
        "h1es",
        "he2s5p",
        "he4t",
        "het4ed",
        "heu4",
        "h1f",
        "h1h",
        "hi5an",
        "hi4co",
        "high5",
        "h4il2",
        "himer4",
        "h4ina",
        "hion4e",
        "hi4p",
        "hir4l",
        "hi3ro",
        "hir4p",
        "hir4r",
        "his3el",
        "his4s",
        "hith5er",
        "hi2v",
        "4hk",
        "4h1l4",
        "hlan4",
        "h2lo",
        "hlo3ri",
        "4h1m",
        "hmet4",
        "2h1n",
        "h5odiz",
        "h5ods",
        "ho4g",
        "hoge4",
        "hol5ar",
        "3hol4e",
        "ho4ma",
        "home3",
        "hon4a",
        "ho5ny",
        "3hood",
        "hoon4",
        "hor5at",
        "ho5ris",
        "hort3e",
        "ho5ru",
        "hos4e",
        "ho5sen",
        "hos1p",
        "1hous",
        "house3",
        "hov5el",
        "4h5p",
        "4hr4",
        "hree5",
        "hro5niz",
        "hro3po",
        "4h1s2",
        "h4sh",
        "h4tar",
        "ht1en",
        "ht5es",
        "h4ty",
        "hu4g",
        "hu4min",
        "hun5ke",
        "hun4t",
        "hus3t4",
        "hu4t",
        "h1w",
        "h4wart",
        "hy3pe",
        "hy3ph",
        "hy2s",
        "2i1a",
        "i2al",
        "iam4",
        "iam5ete",
        "i2an",
        "4ianc",
        "ian3i",
        "4ian4t",
        "ia5pe",
        "iass4",
        "i4ativ",
        "ia4tric",
        "i4atu",
        "ibe4",
        "ib3era",
        "ib5ert",
        "ib5ia",
        "ib3in",
        "ib5it.",
        "ib5ite",
        "i1bl",
        "ib3li",
        "i5bo",
        "i1br",
        "i2b5ri",
        "i5bun",
        "4icam",
        "5icap",
        "4icar",
        "i4car.",
        "i4cara",
        "icas5",
        "i4cay",
        "iccu4",
        "4iceo",
        "4ich",
        "2ici",
        "i5cid",
        "ic5ina",
        "i2cip",
        "ic3ipa",
        "i4cly",
        "i2c5oc",
        "4i1cr",
        "5icra",
        "i4cry",
        "ic4te",
        "ictu2",
        "ic4t3ua",
        "ic3ula",
        "ic4um",
        "ic5uo",
        "i3cur",
        "2id",
        "i4dai",
        "id5anc",
        "id5d",
        "ide3al",
        "ide4s",
        "i2di",
        "id5ian",
        "idi4ar",
        "i5die",
        "id3io",
        "idi5ou",
        "id1it",
        "id5iu",
        "i3dle",
        "i4dom",
        "id3ow",
        "i4dr",
        "i2du",
        "id5uo",
        "2ie4",
        "ied4e",
        "5ie5ga",
        "ield3",
        "ien5a4",
        "ien4e",
        "i5enn",
        "i3enti",
        "i1er.",
        "i3esc",
        "i1est",
        "i3et",
        "4if.",
        "if5ero",
        "iff5en",
        "if4fr",
        "4ific.",
        "i3fie",
        "i3fl",
        "4ift",
        "2ig",
        "iga5b",
        "ig3era",
        "ight3i",
        "4igi",
        "i3gib",
        "ig3il",
        "ig3in",
        "ig3it",
        "i4g4l",
        "i2go",
        "ig3or",
        "ig5ot",
        "i5gre",
        "igu5i",
        "ig1ur",
        "i3h",
        "4i5i4",
        "i3j",
        "4ik",
        "i1la",
        "il3a4b",
        "i4lade",
        "i2l5am",
        "ila5ra",
        "i3leg",
        "il1er",
        "ilev4",
        "il5f",
        "il1i",
        "il3ia",
        "il2ib",
        "il3io",
        "il4ist",
        "2ilit",
        "il2iz",
        "ill5ab",
        "4iln",
        "il3oq",
        "il4ty",
        "il5ur",
        "il3v",
        "i4mag",
        "im3age",
        "ima5ry",
        "imenta5r",
        "4imet",
        "im1i",
        "im5ida",
        "imi5le",
        "i5mini",
        "4imit",
        "im4ni",
        "i3mon",
        "i2mu",
        "im3ula",
        "2in.",
        "i4n3au",
        "4inav",
        "incel4",
        "in3cer",
        "4ind",
        "in5dling",
        "2ine",
        "i3nee",
        "iner4ar",
        "i5ness",
        "4inga",
        "4inge",
        "in5gen",
        "4ingi",
        "in5gling",
        "4ingo",
        "4ingu",
        "2ini",
        "i5ni.",
        "i4nia",
        "in3io",
        "in1is",
        "i5nite.",
        "5initio",
        "in3ity",
        "4ink",
        "4inl",
        "2inn",
        "2i1no",
        "i4no4c",
        "ino4s",
        "i4not",
        "2ins",
        "in3se",
        "insur5a",
        "2int.",
        "2in4th",
        "in1u",
        "i5nus",
        "4iny",
        "2io",
        "4io.",
        "ioge4",
        "io2gr",
        "i1ol",
        "io4m",
        "ion3at",
        "ion4ery",
        "ion3i",
        "io5ph",
        "ior3i",
        "i4os",
        "io5th",
        "i5oti",
        "io4to",
        "i4our",
        "2ip",
        "ipe4",
        "iphras4",
        "ip3i",
        "ip4ic",
        "ip4re4",
        "ip3ul",
        "i3qua",
        "iq5uef",
        "iq3uid",
        "iq3ui3t",
        "4ir",
        "i1ra",
        "ira4b",
        "i4rac",
        "ird5e",
        "ire4de",
        "i4ref",
        "i4rel4",
        "i4res",
        "ir5gi",
        "ir1i",
        "iri5de",
        "ir4is",
        "iri3tu",
        "5i5r2iz",
        "ir4min",
        "iro4g",
        "5iron.",
        "ir5ul",
        "2is.",
        "is5ag",
        "is3ar",
        "isas5",
        "2is1c",
        "is3ch",
        "4ise",
        "is3er",
        "3isf",
        "is5han",
        "is3hon",
        "ish5op",
        "is3ib",
        "isi4d",
        "i5sis",
        "is5itiv",
        "4is4k",
        "islan4",
        "4isms",
        "i2so",
        "iso5mer",
        "is1p",
        "is2pi",
        "is4py",
        "4is1s",
        "is4sal",
        "issen4",
        "is4ses",
        "is4ta.",
        "is1te",
        "is1ti",
        "ist4ly",
        "4istral",
        "i2su",
        "is5us",
        "4ita.",
        "ita4bi",
        "i4tag",
        "4ita5m",
        "i3tan",
        "i3tat",
        "2ite",
        "it3era",
        "i5teri",
        "it4es",
        "2ith",
        "i1ti",
        "4itia",
        "4i2tic",
        "it3ica",
        "5i5tick",
        "it3ig",
        "it5ill",
        "i2tim",
        "2itio",
        "4itis",
        "i4tism",
        "i2t5o5m",
        "4iton",
        "i4tram",
        "it5ry",
        "4itt",
        "it3uat",
        "i5tud",
        "it3ul",
        "4itz.",
        "i1u",
        "2iv",
        "iv3ell",
        "iv3en.",
        "i4v3er.",
        "i4vers.",
        "iv5il.",
        "iv5io",
        "iv1it",
        "i5vore",
        "iv3o3ro",
        "i4v3ot",
        "4i5w",
        "ix4o",
        "4iy",
        "4izar",
        "izi4",
        "5izont",
        "5ja",
        "jac4q",
        "ja4p",
        "1je",
        "jer5s",
        "4jestie",
        "4jesty",
        "jew3",
        "jo4p",
        "5judg",
        "3ka.",
        "k3ab",
        "k5ag",
        "kais4",
        "kal4",
        "k1b",
        "k2ed",
        "1kee",
        "ke4g",
        "ke5li",
        "k3en4d",
        "k1er",
        "kes4",
        "k3est.",
        "ke4ty",
        "k3f",
        "kh4",
        "k1i",
        "5ki.",
        "5k2ic",
        "k4ill",
        "kilo5",
        "k4im",
        "k4in.",
        "kin4de",
        "k5iness",
        "kin4g",
        "ki4p",
        "kis4",
        "k5ish",
        "kk4",
        "k1l",
        "4kley",
        "4kly",
        "k1m",
        "k5nes",
        "1k2no",
        "ko5r",
        "kosh4",
        "k3ou",
        "kro5n",
        "4k1s2",
        "k4sc",
        "ks4l",
        "k4sy",
        "k5t",
        "k1w",
        "lab3ic",
        "l4abo",
        "laci4",
        "l4ade",
        "la3dy",
        "lag4n",
        "lam3o",
        "3land",
        "lan4dl",
        "lan5et",
        "lan4te",
        "lar4g",
        "lar3i",
        "las4e",
        "la5tan",
        "4lateli",
        "4lativ",
        "4lav",
        "la4v4a",
        "2l1b",
        "lbin4",
        "4l1c2",
        "lce4",
        "l3ci",
        "2ld",
        "l2de",
        "ld4ere",
        "ld4eri",
        "ldi4",
        "ld5is",
        "l3dr",
        "l4dri",
        "le2a",
        "le4bi",
        "left5",
        "5leg.",
        "5legg",
        "le4mat",
        "lem5atic",
        "4len.",
        "3lenc",
        "5lene.",
        "1lent",
        "le3ph",
        "le4pr",
        "lera5b",
        "ler4e",
        "3lerg",
        "3l4eri",
        "l4ero",
        "les2",
        "le5sco",
        "5lesq",
        "3less",
        "5less.",
        "l3eva",
        "lev4er.",
        "lev4era",
        "lev4ers",
        "3ley",
        "4leye",
        "2lf",
        "l5fr",
        "4l1g4",
        "l5ga",
        "lgar3",
        "l4ges",
        "lgo3",
        "2l3h",
        "li4ag",
        "li2am",
        "liar5iz",
        "li4as",
        "li4ato",
        "li5bi",
        "5licio",
        "li4cor",
        "4lics",
        "4lict.",
        "l4icu",
        "l3icy",
        "l3ida",
        "lid5er",
        "3lidi",
        "lif3er",
        "l4iff",
        "li4fl",
        "5ligate",
        "3ligh",
        "li4gra",
        "3lik",
        "4l4i4l",
        "lim4bl",
        "lim3i",
        "li4mo",
        "l4im4p",
        "l4ina",
        "1l4ine",
        "lin3ea",
        "lin3i",
        "link5er",
        "li5og",
        "4l4iq",
        "lis4p",
        "l1it",
        "l2it.",
        "5litica",
        "l5i5tics",
        "liv3er",
        "l1iz",
        "4lj",
        "lka3",
        "l3kal",
        "lka4t",
        "l1l",
        "l4law",
        "l2le",
        "l5lea",
        "l3lec",
        "l3leg",
        "l3lel",
        "l3le4n",
        "l3le4t",
        "ll2i",
        "l2lin4",
        "l5lina",
        "ll4o",
        "lloqui5",
        "ll5out",
        "l5low",
        "2lm",
        "l5met",
        "lm3ing",
        "l4mod",
        "lmon4",
        "2l1n2",
        "3lo.",
        "lob5al",
        "lo4ci",
        "4lof",
        "3logic",
        "l5ogo",
        "3logu",
        "lom3er",
        "5long",
        "lon4i",
        "l3o3niz",
        "lood5",
        "5lope.",
        "lop3i",
        "l3opm",
        "lora4",
        "lo4rato",
        "lo5rie",
        "lor5ou",
        "5los.",
        "los5et",
        "5losophiz",
        "5losophy",
        "los4t",
        "lo4ta",
        "loun5d",
        "2lout",
        "4lov",
        "2lp",
        "lpa5b",
        "l3pha",
        "l5phi",
        "lp5ing",
        "l3pit",
        "l4pl",
        "l5pr",
        "4l1r",
        "2l1s2",
        "l4sc",
        "l2se",
        "l4sie",
        "4lt",
        "lt5ag",
        "ltane5",
        "l1te",
        "lten4",
        "ltera4",
        "lth3i",
        "l5ties.",
        "ltis4",
        "l1tr",
        "ltu2",
        "ltur3a",
        "lu5a",
        "lu3br",
        "luch4",
        "lu3ci",
        "lu3en",
        "luf4",
        "lu5id",
        "lu4ma",
        "5lumi",
        "l5umn.",
        "5lumnia",
        "lu3o",
        "luo3r",
        "4lup",
        "luss4",
        "lus3te",
        "1lut",
        "l5ven",
        "l5vet4",
        "2l1w",
        "1ly",
        "4lya",
        "4lyb",
        "ly5me",
        "ly3no",
        "2lys4",
        "l5yse",
        "1ma",
        "2mab",
        "ma2ca",
        "ma5chine",
        "ma4cl",
        "mag5in",
        "5magn",
        "2mah",
        "maid5",
        "4mald",
        "ma3lig",
        "ma5lin",
        "mal4li",
        "mal4ty",
        "5mania",
        "man5is",
        "man3iz",
        "4map",
        "ma5rine.",
        "ma5riz",
        "mar4ly",
        "mar3v",
        "ma5sce",
        "mas4e",
        "mas1t",
        "5mate",
        "math3",
        "ma3tis",
        "4matiza",
        "4m1b",
        "mba4t5",
        "m5bil",
        "m4b3ing",
        "mbi4v",
        "4m5c",
        "4me.",
        "2med",
        "4med.",
        "5media",
        "me3die",
        "m5e5dy",
        "me2g",
        "mel5on",
        "mel4t",
        "me2m",
        "mem1o3",
        "1men",
        "men4a",
        "men5ac",
        "men4de",
        "4mene",
        "men4i",
        "mens4",
        "mensu5",
        "3ment",
        "men4te",
        "me5on",
        "m5ersa",
        "2mes",
        "3mesti",
        "me4ta",
        "met3al",
        "me1te",
        "me5thi",
        "m4etr",
        "5metric",
        "me5trie",
        "me3try",
        "me4v",
        "4m1f",
        "2mh",
        "5mi.",
        "mi3a",
        "mid4a",
        "mid4g",
        "mig4",
        "3milia",
        "m5i5lie",
        "m4ill",
        "min4a",
        "3mind",
        "m5inee",
        "m4ingl",
        "min5gli",
        "m5ingly",
        "min4t",
        "m4inu",
        "miot4",
        "m2is",
        "mis4er.",
        "mis5l",
        "mis4ti",
        "m5istry",
        "4mith",
        "m2iz",
        "4mk",
        "4m1l",
        "m1m",
        "mma5ry",
        "4m1n",
        "mn4a",
        "m4nin",
        "mn4o",
        "1mo",
        "4mocr",
        "5mocratiz",
        "mo2d1",
        "mo4go",
        "mois2",
        "moi5se",
        "4mok",
        "mo5lest",
        "mo3me",
        "mon5et",
        "mon5ge",
        "moni3a",
        "mon4ism",
        "mon4ist",
        "mo3niz",
        "monol4",
        "mo3ny.",
        "mo2r",
        "4mora.",
        "mos2",
        "mo5sey",
        "mo3sp",
        "moth3",
        "m5ouf",
        "3mous",
        "mo2v",
        "4m1p",
        "mpara5",
        "mpa5rab",
        "mpar5i",
        "m3pet",
        "mphas4",
        "m2pi",
        "mpi4a",
        "mp5ies",
        "m4p1in",
        "m5pir",
        "mp5is",
        "mpo3ri",
        "mpos5ite",
        "m4pous",
        "mpov5",
        "mp4tr",
        "m2py",
        "4m3r",
        "4m1s2",
        "m4sh",
        "m5si",
        "4mt",
        "1mu",
        "mula5r4",
        "5mult",
        "multi3",
        "3mum",
        "mun2",
        "4mup",
        "mu4u",
        "4mw",
        "1na",
        "2n1a2b",
        "n4abu",
        "4nac.",
        "na4ca",
        "n5act",
        "nag5er.",
        "nak4",
        "na4li",
        "na5lia",
        "4nalt",
        "na5mit",
        "n2an",
        "nanci4",
        "nan4it",
        "nank4",
        "nar3c",
        "4nare",
        "nar3i",
        "nar4l",
        "n5arm",
        "n4as",
        "nas4c",
        "nas5ti",
        "n2at",
        "na3tal",
        "nato5miz",
        "n2au",
        "nau3se",
        "3naut",
        "nav4e",
        "4n1b4",
        "ncar5",
        "n4ces.",
        "n3cha",
        "n5cheo",
        "n5chil",
        "n3chis",
        "nc1in",
        "nc4it",
        "ncour5a",
        "n1cr",
        "n1cu",
        "n4dai",
        "n5dan",
        "n1de",
        "nd5est.",
        "ndi4b",
        "n5d2if",
        "n1dit",
        "n3diz",
        "n5duc",
        "ndu4r",
        "nd2we",
        "2ne.",
        "n3ear",
        "ne2b",
        "neb3u",
        "ne2c",
        "5neck",
        "2ned",
        "ne4gat",
        "neg5ativ",
        "5nege",
        "ne4la",
        "nel5iz",
        "ne5mi",
        "ne4mo",
        "1nen",
        "4nene",
        "3neo",
        "ne4po",
        "ne2q",
        "n1er",
        "nera5b",
        "n4erar",
        "n2ere",
        "n4er5i",
        "ner4r",
        "1nes",
        "2nes.",
        "4nesp",
        "2nest",
        "4nesw",
        "3netic",
        "ne4v",
        "n5eve",
        "ne4w",
        "n3f",
        "n4gab",
        "n3gel",
        "nge4n4e",
        "n5gere",
        "n3geri",
        "ng5ha",
        "n3gib",
        "ng1in",
        "n5git",
        "n4gla",
        "ngov4",
        "ng5sh",
        "n1gu",
        "n4gum",
        "n2gy",
        "4n1h4",
        "nha4",
        "nhab3",
        "nhe4",
        "3n4ia",
        "ni3an",
        "ni4ap",
        "ni3ba",
        "ni4bl",
        "ni4d",
        "ni5di",
        "ni4er",
        "ni2fi",
        "ni5ficat",
        "n5igr",
        "nik4",
        "n1im",
        "ni3miz",
        "n1in",
        "5nine.",
        "nin4g",
        "ni4o",
        "5nis.",
        "nis4ta",
        "n2it",
        "n4ith",
        "3nitio",
        "n3itor",
        "ni3tr",
        "n1j",
        "4nk2",
        "n5kero",
        "n3ket",
        "nk3in",
        "n1kl",
        "4n1l",
        "n5m",
        "nme4",
        "nmet4",
        "4n1n2",
        "nne4",
        "nni3al",
        "nni4v",
        "nob4l",
        "no3ble",
        "n5ocl",
        "4n3o2d",
        "3noe",
        "4nog",
        "noge4",
        "nois5i",
        "no5l4i",
        "5nologis",
        "3nomic",
        "n5o5miz",
        "no4mo",
        "no3my",
        "no4n",
        "non4ag",
        "non5i",
        "n5oniz",
        "4nop",
        "5nop5o5li",
        "nor5ab",
        "no4rary",
        "4nosc",
        "nos4e",
        "nos5t",
        "no5ta",
        "1nou",
        "3noun",
        "nov3el3",
        "nowl3",
        "n1p4",
        "npi4",
        "npre4c",
        "n1q",
        "n1r",
        "nru4",
        "2n1s2",
        "ns5ab",
        "nsati4",
        "ns4c",
        "n2se",
        "n4s3es",
        "nsid1",
        "nsig4",
        "n2sl",
        "ns3m",
        "n4soc",
        "ns4pe",
        "n5spi",
        "nsta5bl",
        "n1t",
        "nta4b",
        "nter3s",
        "nt2i",
        "n5tib",
        "nti4er",
        "nti2f",
        "n3tine",
        "n4t3ing",
        "nti4p",
        "ntrol5li",
        "nt4s",
        "ntu3me",
        "nu1a",
        "nu4d",
        "nu5en",
        "nuf4fe",
        "n3uin",
        "3nu3it",
        "n4um",
        "nu1me",
        "n5umi",
        "3nu4n",
        "n3uo",
        "nu3tr",
        "n1v2",
        "n1w4",
        "nym4",
        "nyp4",
        "4nz",
        "n3za",
        "4oa",
        "oad3",
        "o5a5les",
        "oard3",
        "oas4e",
        "oast5e",
        "oat5i",
        "ob3a3b",
        "o5bar",
        "obe4l",
        "o1bi",
        "o2bin",
        "ob5ing",
        "o3br",
        "ob3ul",
        "o1ce",
        "och4",
        "o3chet",
        "ocif3",
        "o4cil",
        "o4clam",
        "o4cod",
        "oc3rac",
        "oc5ratiz",
        "ocre3",
        "5ocrit",
        "octor5a",
        "oc3ula",
        "o5cure",
        "od5ded",
        "od3ic",
        "odi3o",
        "o2do4",
        "odor3",
        "od5uct.",
        "od5ucts",
        "o4el",
        "o5eng",
        "o3er",
        "oe4ta",
        "o3ev",
        "o2fi",
        "of5ite",
        "ofit4t",
        "o2g5a5r",
        "og5ativ",
        "o4gato",
        "o1ge",
        "o5gene",
        "o5geo",
        "o4ger",
        "o3gie",
        "1o1gis",
        "og3it",
        "o4gl",
        "o5g2ly",
        "3ogniz",
        "o4gro",
        "ogu5i",
        "1ogy",
        "2ogyn",
        "o1h2",
        "ohab5",
        "oi2",
        "oic3es",
        "oi3der",
        "oiff4",
        "oig4",
        "oi5let",
        "o3ing",
        "oint5er",
        "o5ism",
        "oi5son",
        "oist5en",
        "oi3ter",
        "o5j",
        "2ok",
        "o3ken",
        "ok5ie",
        "o1la",
        "o4lan",
        "olass4",
        "ol2d",
        "old1e",
        "ol3er",
        "o3lesc",
        "o3let",
        "ol4fi",
        "ol2i",
        "o3lia",
        "o3lice",
        "ol5id.",
        "o3li4f",
        "o5lil",
        "ol3ing",
        "o5lio",
        "o5lis.",
        "ol3ish",
        "o5lite",
        "o5litio",
        "o5liv",
        "olli4e",
        "ol5ogiz",
        "olo4r",
        "ol5pl",
        "ol2t",
        "ol3ub",
        "ol3ume",
        "ol3un",
        "o5lus",
        "ol2v",
        "o2ly",
        "om5ah",
        "oma5l",
        "om5atiz",
        "om2be",
        "om4bl",
        "o2me",
        "om3ena",
        "om5erse",
        "o4met",
        "om5etry",
        "o3mia",
        "om3ic.",
        "om3ica",
        "o5mid",
        "om1in",
        "o5mini",
        "5ommend",
        "omo4ge",
        "o4mon",
        "om3pi",
        "ompro5",
        "o2n",
        "on1a",
        "on4ac",
        "o3nan",
        "on1c",
        "3oncil",
        "2ond",
        "on5do",
        "o3nen",
        "on5est",
        "on4gu",
        "on1ic",
        "o3nio",
        "on1is",
        "o5niu",
        "on3key",
        "on4odi",
        "on3omy",
        "on3s",
        "onspi4",
        "onspir5a",
        "onsu4",
        "onten4",
        "on3t4i",
        "ontif5",
        "on5um",
        "onva5",
        "oo2",
        "ood5e",
        "ood5i",
        "oo4k",
        "oop3i",
        "o3ord",
        "oost5",
        "o2pa",
        "ope5d",
        "op1er",
        "3opera",
        "4operag",
        "2oph",
        "o5phan",
        "o5pher",
        "op3ing",
        "o3pit",
        "o5pon",
        "o4posi",
        "o1pr",
        "op1u",
        "opy5",
        "o1q",
        "o1ra",
        "o5ra.",
        "o4r3ag",
        "or5aliz",
        "or5ange",
        "ore5a",
        "o5real",
        "or3ei",
        "ore5sh",
        "or5est.",
        "orew4",
        "or4gu",
        "4o5ria",
        "or3ica",
        "o5ril",
        "or1in",
        "o1rio",
        "or3ity",
        "o3riu",
        "or2mi",
        "orn2e",
        "o5rof",
        "or3oug",
        "or5pe",
        "3orrh",
        "or4se",
        "ors5en",
        "orst4",
        "or3thi",
        "or3thy",
        "or4ty",
        "o5rum",
        "o1ry",
        "os3al",
        "os2c",
        "os4ce",
        "o3scop",
        "4oscopi",
        "o5scr",
        "os4i4e",
        "os5itiv",
        "os3ito",
        "os3ity",
        "osi4u",
        "os4l",
        "o2so",
        "os4pa",
        "os4po",
        "os2ta",
        "o5stati",
        "os5til",
        "os5tit",
        "o4tan",
        "otele4g",
        "ot3er.",
        "ot5ers",
        "o4tes",
        "4oth",
        "oth5esi",
        "oth3i4",
        "ot3ic.",
        "ot5ica",
        "o3tice",
        "o3tif",
        "o3tis",
        "oto5s",
        "ou2",
        "ou3bl",
        "ouch5i",
        "ou5et",
        "ou4l",
        "ounc5er",
        "oun2d",
        "ou5v",
        "ov4en",
        "over4ne",
        "over3s",
        "ov4ert",
        "o3vis",
        "oviti4",
        "o5v4ol",
        "ow3der",
        "ow3el",
        "ow5est",
        "ow1i",
        "own5i",
        "o4wo",
        "oy1a",
        "1pa",
        "pa4ca",
        "pa4ce",
        "pac4t",
        "p4ad",
        "5pagan",
        "p3agat",
        "p4ai",
        "pain4",
        "p4al",
        "pan4a",
        "pan3el",
        "pan4ty",
        "pa3ny",
        "pa1p",
        "pa4pu",
        "para5bl",
        "par5age",
        "par5di",
        "3pare",
        "par5el",
        "p4a4ri",
        "par4is",
        "pa2te",
        "pa5ter",
        "5pathic",
        "pa5thy",
        "pa4tric",
        "pav4",
        "3pay",
        "4p1b",
        "pd4",
        "4pe.",
        "3pe4a",
        "pear4l",
        "pe2c",
        "2p2ed",
        "3pede",
        "3pedi",
        "pedia4",
        "ped4ic",
        "p4ee",
        "pee4d",
        "pek4",
        "pe4la",
        "peli4e",
        "pe4nan",
        "p4enc",
        "pen4th",
        "pe5on",
        "p4era.",
        "pera5bl",
        "p4erag",
        "p4eri",
        "peri5st",
        "per4mal",
        "perme5",
        "p4ern",
        "per3o",
        "per3ti",
        "pe5ru",
        "per1v",
        "pe2t",
        "pe5ten",
        "pe5tiz",
        "4pf",
        "4pg",
        "4ph.",
        "phar5i",
        "phe3no",
        "ph4er",
        "ph4es.",
        "ph1ic",
        "5phie",
        "ph5ing",
        "5phisti",
        "3phiz",
        "ph2l",
        "3phob",
        "3phone",
        "5phoni",
        "pho4r",
        "4phs",
        "ph3t",
        "5phu",
        "1phy",
        "pi3a",
        "pian4",
        "pi4cie",
        "pi4cy",
        "p4id",
        "p5ida",
        "pi3de",
        "5pidi",
        "3piec",
        "pi3en",
        "pi4grap",
        "pi3lo",
        "pi2n",
        "p4in.",
        "pind4",
        "p4ino",
        "3pi1o",
        "pion4",
        "p3ith",
        "pi5tha",
        "pi2tu",
        "2p3k2",
        "1p2l2",
        "3plan",
        "plas5t",
        "pli3a",
        "pli5er",
        "4plig",
        "pli4n",
        "ploi4",
        "plu4m",
        "plum4b",
        "4p1m",
        "2p3n",
        "po4c",
        "5pod.",
        "po5em",
        "po3et5",
        "5po4g",
        "poin2",
        "5point",
        "poly5t",
        "po4ni",
        "po4p",
        "1p4or",
        "po4ry",
        "1pos",
        "pos1s",
        "p4ot",
        "po4ta",
        "5poun",
        "4p1p",
        "ppa5ra",
        "p2pe",
        "p4ped",
        "p5pel",
        "p3pen",
        "p3per",
        "p3pet",
        "ppo5site",
        "pr2",
        "pray4e",
        "5preci",
        "pre5co",
        "pre3em",
        "pref5ac",
        "pre4la",
        "pre3r",
        "p3rese",
        "3press",
        "pre5ten",
        "pre3v",
        "5pri4e",
        "prin4t3",
        "pri4s",
        "pris3o",
        "p3roca",
        "prof5it",
        "pro3l",
        "pros3e",
        "pro1t",
        "2p1s2",
        "p2se",
        "ps4h",
        "p4sib",
        "2p1t",
        "pt5a4b",
        "p2te",
        "p2th",
        "pti3m",
        "ptu4r",
        "p4tw",
        "pub3",
        "pue4",
        "puf4",
        "pul3c",
        "pu4m",
        "pu2n",
        "pur4r",
        "5pus",
        "pu2t",
        "5pute",
        "put3er",
        "pu3tr",
        "put4ted",
        "put4tin",
        "p3w",
        "qu2",
        "qua5v",
        "2que.",
        "3quer",
        "3quet",
        "2rab",
        "ra3bi",
        "rach4e",
        "r5acl",
        "raf5fi",
        "raf4t",
        "r2ai",
        "ra4lo",
        "ram3et",
        "r2ami",
        "rane5o",
        "ran4ge",
        "r4ani",
        "ra5no",
        "rap3er",
        "3raphy",
        "rar5c",
        "rare4",
        "rar5ef",
        "4raril",
        "r2as",
        "ration4",
        "rau4t",
        "ra5vai",
        "rav3el",
        "ra5zie",
        "r1b",
        "r4bab",
        "r4bag",
        "rbi2",
        "rbi4f",
        "r2bin",
        "r5bine",
        "rb5ing.",
        "rb4o",
        "r1c",
        "r2ce",
        "rcen4",
        "r3cha",
        "rch4er",
        "r4ci4b",
        "rc4it",
        "rcum3",
        "r4dal",
        "rd2i",
        "rdi4a",
        "rdi4er",
        "rdin4",
        "rd3ing",
        "2re.",
        "re1al",
        "re3an",
        "re5arr",
        "5reav",
        "re4aw",
        "r5ebrat",
        "rec5oll",
        "rec5ompe",
        "re4cre",
        "2r2ed",
        "re1de",
        "re3dis",
        "red5it",
        "re4fac",
        "re2fe",
        "re5fer.",
        "re3fi",
        "re4fy",
        "reg3is",
        "re5it",
        "re1li",
        "re5lu",
        "r4en4ta",
        "ren4te",
        "re1o",
        "re5pin",
        "re4posi",
        "re1pu",
        "r1er4",
        "r4eri",
        "rero4",
        "re5ru",
        "r4es.",
        "re4spi",
        "ress5ib",
        "res2t",
        "re5stal",
        "re3str",
        "re4ter",
        "re4ti4z",
        "re3tri",
        "reu2",
        "re5uti",
        "rev2",
        "re4val",
        "rev3el",
        "r5ev5er.",
        "re5vers",
        "re5vert",
        "re5vil",
        "rev5olu",
        "re4wh",
        "r1f",
        "rfu4",
        "r4fy",
        "rg2",
        "rg3er",
        "r3get",
        "r3gic",
        "rgi4n",
        "rg3ing",
        "r5gis",
        "r5git",
        "r1gl",
        "rgo4n",
        "r3gu",
        "rh4",
        "4rh.",
        "4rhal",
        "ri3a",
        "ria4b",
        "ri4ag",
        "r4ib",
        "rib3a",
        "ric5as",
        "r4ice",
        "4rici",
        "5ricid",
        "ri4cie",
        "r4ico",
        "rid5er",
        "ri3enc",
        "ri3ent",
        "ri1er",
        "ri5et",
        "rig5an",
        "5rigi",
        "ril3iz",
        "5riman",
        "rim5i",
        "3rimo",
        "rim4pe",
        "r2ina",
        "5rina.",
        "rin4d",
        "rin4e",
        "rin4g",
        "ri1o",
        "5riph",
        "riph5e",
        "ri2pl",
        "rip5lic",
        "r4iq",
        "r2is",
        "r4is.",
        "ris4c",
        "r3ish",
        "ris4p",
        "ri3ta3b",
        "r5ited.",
        "rit5er.",
        "rit5ers",
        "rit3ic",
        "ri2tu",
        "rit5ur",
        "riv5el",
        "riv3et",
        "riv3i",
        "r3j",
        "r3ket",
        "rk4le",
        "rk4lin",
        "r1l",
        "rle4",
        "r2led",
        "r4lig",
        "r4lis",
        "rl5ish",
        "r3lo4",
        "r1m",
        "rma5c",
        "r2me",
        "r3men",
        "rm5ers",
        "rm3ing",
        "r4ming.",
        "r4mio",
        "r3mit",
        "r4my",
        "r4nar",
        "r3nel",
        "r4ner",
        "r5net",
        "r3ney",
        "r5nic",
        "r1nis4",
        "r3nit",
        "r3niv",
        "rno4",
        "r4nou",
        "r3nu",
        "rob3l",
        "r2oc",
        "ro3cr",
        "ro4e",
        "ro1fe",
        "ro5fil",
        "rok2",
        "ro5ker",
        "5role.",
        "rom5ete",
        "rom4i",
        "rom4p",
        "ron4al",
        "ron4e",
        "ro5n4is",
        "ron4ta",
        "1room",
        "5root",
        "ro3pel",
        "rop3ic",
        "ror3i",
        "ro5ro",
        "ros5per",
        "ros4s",
        "ro4the",
        "ro4ty",
        "ro4va",
        "rov5el",
        "rox5",
        "r1p",
        "r4pea",
        "r5pent",
        "rp5er.",
        "r3pet",
        "rp4h4",
        "rp3ing",
        "r3po",
        "r1r4",
        "rre4c",
        "rre4f",
        "r4reo",
        "rre4st",
        "rri4o",
        "rri4v",
        "rron4",
        "rros4",
        "rrys4",
        "4rs2",
        "r1sa",
        "rsa5ti",
        "rs4c",
        "r2se",
        "r3sec",
        "rse4cr",
        "rs5er.",
        "rs3es",
        "rse5v2",
        "r1sh",
        "r5sha",
        "r1si",
        "r4si4b",
        "rson3",
        "r1sp",
        "r5sw",
        "rtach4",
        "r4tag",
        "r3teb",
        "rten4d",
        "rte5o",
        "r1ti",
        "rt5ib",
        "rti4d",
        "r4tier",
        "r3tig",
        "rtil3i",
        "rtil4l",
        "r4tily",
        "r4tist",
        "r4tiv",
        "r3tri",
        "rtroph4",
        "rt4sh",
        "ru3a",
        "ru3e4l",
        "ru3en",
        "ru4gl",
        "ru3in",
        "rum3pl",
        "ru2n",
        "runk5",
        "run4ty",
        "r5usc",
        "ruti5n",
        "rv4e",
        "rvel4i",
        "r3ven",
        "rv5er.",
        "r5vest",
        "r3vey",
        "r3vic",
        "rvi4v",
        "r3vo",
        "r1w",
        "ry4c",
        "5rynge",
        "ry3t",
        "sa2",
        "2s1ab",
        "5sack",
        "sac3ri",
        "s3act",
        "5sai",
        "salar4",
        "sal4m",
        "sa5lo",
        "sal4t",
        "3sanc",
        "san4de",
        "s1ap",
        "sa5ta",
        "5sa3tio",
        "sat3u",
        "sau4",
        "sa5vor",
        "5saw",
        "4s5b",
        "scan4t5",
        "sca4p",
        "scav5",
        "s4ced",
        "4scei",
        "s4ces",
        "sch2",
        "s4cho",
        "3s4cie",
        "5scin4d",
        "scle5",
        "s4cli",
        "scof4",
        "4scopy",
        "scour5a",
        "s1cu",
        "4s5d",
        "4se.",
        "se4a",
        "seas4",
        "sea5w",
        "se2c3o",
        "3sect",
        "4s4ed",
        "se4d4e",
        "s5edl",
        "se2g",
        "seg3r",
        "5sei",
        "se1le",
        "5self",
        "5selv",
        "4seme",
        "se4mol",
        "sen5at",
        "4senc",
        "sen4d",
        "s5ened",
        "sen5g",
        "s5enin",
        "4sentd",
        "4sentl",
        "sep3a3",
        "4s1er.",
        "s4erl",
        "ser4o",
        "4servo",
        "s1e4s",
        "se5sh",
        "ses5t",
        "5se5um",
        "5sev",
        "sev3en",
        "sew4i",
        "5sex",
        "4s3f",
        "2s3g",
        "s2h",
        "2sh.",
        "sh1er",
        "5shev",
        "sh1in",
        "sh3io",
        "3ship",
        "shiv5",
        "sho4",
        "sh5old",
        "shon3",
        "shor4",
        "short5",
        "4shw",
        "si1b",
        "s5icc",
        "3side.",
        "5sides",
        "5sidi",
        "si5diz",
        "4signa",
        "sil4e",
        "4sily",
        "2s1in",
        "s2ina",
        "5sine.",
        "s3ing",
        "1sio",
        "5sion",
        "sion5a",
        "si2r",
        "sir5a",
        "1sis",
        "3sitio",
        "5siu",
        "1siv",
        "5siz",
        "sk2",
        "4ske",
        "s3ket",
        "sk5ine",
        "sk5ing",
        "s1l2",
        "s3lat",
        "s2le",
        "slith5",
        "2s1m",
        "s3ma",
        "small3",
        "sman3",
        "smel4",
        "s5men",
        "5smith",
        "smol5d4",
        "s1n4",
        "1so",
        "so4ce",
        "soft3",
        "so4lab",
        "sol3d2",
        "so3lic",
        "5solv",
        "3som",
        "3s4on.",
        "sona4",
        "son4g",
        "s4op",
        "5sophic",
        "s5ophiz",
        "s5ophy",
        "sor5c",
        "sor5d",
        "4sov",
        "so5vi",
        "2spa",
        "5spai",
        "spa4n",
        "spen4d",
        "2s5peo",
        "2sper",
        "s2phe",
        "3spher",
        "spho5",
        "spil4",
        "sp5ing",
        "4spio",
        "s4ply",
        "s4pon",
        "spor4",
        "4spot",
        "squal4l",
        "s1r",
        "2ss",
        "s1sa",
        "ssas3",
        "s2s5c",
        "s3sel",
        "s5seng",
        "s4ses.",
        "s5set",
        "s1si",
        "s4sie",
        "ssi4er",
        "ss5ily",
        "s4sl",
        "ss4li",
        "s4sn",
        "sspend4",
        "ss2t",
        "ssur5a",
        "ss5w",
        "2st.",
        "s2tag",
        "s2tal",
        "stam4i",
        "5stand",
        "s4ta4p",
        "5stat.",
        "s4ted",
        "stern5i",
        "s5tero",
        "ste2w",
        "stew5a",
        "s3the",
        "st2i",
        "s4ti.",
        "s5tia",
        "s1tic",
        "5stick",
        "s4tie",
        "s3tif",
        "st3ing",
        "5stir",
        "s1tle",
        "5stock",
        "stom3a",
        "5stone",
        "s4top",
        "3store",
        "st4r",
        "s4trad",
        "5stratu",
        "s4tray",
        "s4trid",
        "4stry",
        "4st3w",
        "s2ty",
        "1su",
        "su1al",
        "su4b3",
        "su2g3",
        "su5is",
        "suit3",
        "s4ul",
        "su2m",
        "sum3i",
        "su2n",
        "su2r",
        "4sv",
        "sw2",
        "4swo",
        "s4y",
        "4syc",
        "3syl",
        "syn5o",
        "sy5rin",
        "1ta",
        "3ta.",
        "2tab",
        "ta5bles",
        "5taboliz",
        "4taci",
        "ta5do",
        "4taf4",
        "tai5lo",
        "ta2l",
        "ta5la",
        "tal5en",
        "tal3i",
        "4talk",
        "tal4lis",
        "ta5log",
        "ta5mo",
        "tan4de",
        "tanta3",
        "ta5per",
        "ta5pl",
        "tar4a",
        "4tarc",
        "4tare",
        "ta3riz",
        "tas4e",
        "ta5sy",
        "4tatic",
        "ta4tur",
        "taun4",
        "tav4",
        "2taw",
        "tax4is",
        "2t1b",
        "4tc",
        "t4ch",
        "tch5et",
        "4t1d",
        "4te.",
        "tead4i",
        "4teat",
        "tece4",
        "5tect",
        "2t1ed",
        "te5di",
        "1tee",
        "teg4",
        "te5ger",
        "te5gi",
        "3tel.",
        "teli4",
        "5tels",
        "te2ma2",
        "tem3at",
        "3tenan",
        "3tenc",
        "3tend",
        "4tenes",
        "1tent",
        "ten4tag",
        "1teo",
        "te4p",
        "te5pe",
        "ter3c",
        "5ter3d",
        "1teri",
        "ter5ies",
        "ter3is",
        "teri5za",
        "5ternit",
        "ter5v",
        "4tes.",
        "4tess",
        "t3ess.",
        "teth5e",
        "3teu",
        "3tex",
        "4tey",
        "2t1f",
        "4t1g",
        "2th.",
        "than4",
        "th2e",
        "4thea",
        "th3eas",
        "the5at",
        "the3is",
        "3thet",
        "th5ic.",
        "th5ica",
        "4thil",
        "5think",
        "4thl",
        "th5ode",
        "5thodic",
        "4thoo",
        "thor5it",
        "tho5riz",
        "2ths",
        "1tia",
        "ti4ab",
        "ti4ato",
        "2ti2b",
        "4tick",
        "t4ico",
        "t4ic1u",
        "5tidi",
        "3tien",
        "tif2",
        "ti5fy",
        "2tig",
        "5tigu",
        "till5in",
        "1tim",
        "4timp",
        "tim5ul",
        "2t1in",
        "t2ina",
        "3tine.",
        "3tini",
        "1tio",
        "ti5oc",
        "tion5ee",
        "5tiq",
        "ti3sa",
        "3tise",
        "tis4m",
        "ti5so",
        "tis4p",
        "5tistica",
        "ti3tl",
        "ti4u",
        "1tiv",
        "tiv4a",
        "1tiz",
        "ti3za",
        "ti3zen",
        "2tl",
        "t5la",
        "tlan4",
        "3tle.",
        "3tled",
        "3tles.",
        "t5let.",
        "t5lo",
        "4t1m",
        "tme4",
        "2t1n2",
        "1to",
        "to3b",
        "to5crat",
        "4todo",
        "2tof",
        "to2gr",
        "to5ic",
        "to2ma",
        "tom4b",
        "to3my",
        "ton4ali",
        "to3nat",
        "4tono",
        "4tony",
        "to2ra",
        "to3rie",
        "tor5iz",
        "tos2",
        "5tour",
        "4tout",
        "to3war",
        "4t1p",
        "1tra",
        "tra3b",
        "tra5ch",
        "traci4",
        "trac4it",
        "trac4te",
        "tras4",
        "tra5ven",
        "trav5es5",
        "tre5f",
        "tre4m",
        "trem5i",
        "5tria",
        "tri5ces",
        "5tricia",
        "4trics",
        "2trim",
        "tri4v",
        "tro5mi",
        "tron5i",
        "4trony",
        "tro5phe",
        "tro3sp",
        "tro3v",
        "tru5i",
        "trus4",
        "4t1s2",
        "t4sc",
        "tsh4",
        "t4sw",
        "4t3t2",
        "t4tes",
        "t5to",
        "ttu4",
        "1tu",
        "tu1a",
        "tu3ar",
        "tu4bi",
        "tud2",
        "4tue",
        "4tuf4",
        "5tu3i",
        "3tum",
        "tu4nis",
        "2t3up.",
        "3ture",
        "5turi",
        "tur3is",
        "tur5o",
        "tu5ry",
        "3tus",
        "4tv",
        "tw4",
        "4t1wa",
        "twis4",
        "4two",
        "1ty",
        "4tya",
        "2tyl",
        "type3",
        "ty5ph",
        "4tz",
        "tz4e",
        "4uab",
        "uac4",
        "ua5na",
        "uan4i",
        "uar5ant",
        "uar2d",
        "uar3i",
        "uar3t",
        "u1at",
        "uav4",
        "ub4e",
        "u4bel",
        "u3ber",
        "u4bero",
        "u1b4i",
        "u4b5ing",
        "u3ble.",
        "u3ca",
        "uci4b",
        "uc4it",
        "ucle3",
        "u3cr",
        "u3cu",
        "u4cy",
        "ud5d",
        "ud3er",
        "ud5est",
        "udev4",
        "u1dic",
        "ud3ied",
        "ud3ies",
        "ud5is",
        "u5dit",
        "u4don",
        "ud4si",
        "u4du",
        "u4ene",
        "uens4",
        "uen4te",
        "uer4il",
        "3ufa",
        "u3fl",
        "ugh3en",
        "ug5in",
        "2ui2",
        "uil5iz",
        "ui4n",
        "u1ing",
        "uir4m",
        "uita4",
        "uiv3",
        "uiv4er.",
        "u5j",
        "4uk",
        "u1la",
        "ula5b",
        "u5lati",
        "ulch4",
        "5ulche",
        "ul3der",
        "ul4e",
        "u1len",
        "ul4gi",
        "ul2i",
        "u5lia",
        "ul3ing",
        "ul5ish",
        "ul4lar",
        "ul4li4b",
        "ul4lis",
        "4ul3m",
        "u1l4o",
        "4uls",
        "uls5es",
        "ul1ti",
        "ultra3",
        "4ultu",
        "u3lu",
        "ul5ul",
        "ul5v",
        "um5ab",
        "um4bi",
        "um4bly",
        "u1mi",
        "u4m3ing",
        "umor5o",
        "um2p",
        "unat4",
        "u2ne",
        "un4er",
        "u1ni",
        "un4im",
        "u2nin",
        "un5ish",
        "uni3v",
        "un3s4",
        "un4sw",
        "unt3ab",
        "un4ter.",
        "un4tes",
        "unu4",
        "un5y",
        "un5z",
        "u4ors",
        "u5os",
        "u1ou",
        "u1pe",
        "uper5s",
        "u5pia",
        "up3ing",
        "u3pl",
        "up3p",
        "upport5",
        "upt5ib",
        "uptu4",
        "u1ra",
        "4ura.",
        "u4rag",
        "u4ras",
        "ur4be",
        "urc4",
        "ur1d",
        "ure5at",
        "ur4fer",
        "ur4fr",
        "u3rif",
        "uri4fic",
        "ur1in",
        "u3rio",
        "u1rit",
        "ur3iz",
        "ur2l",
        "url5ing.",
        "ur4no",
        "uros4",
        "ur4pe",
        "ur4pi",
        "urs5er",
        "ur5tes",
        "ur3the",
        "urti4",
        "ur4tie",
        "u3ru",
        "2us",
        "u5sad",
        "u5san",
        "us4ap",
        "usc2",
        "us3ci",
        "use5a",
        "u5sia",
        "u3sic",
        "us4lin",
        "us1p",
        "us5sl",
        "us5tere",
        "us1tr",
        "u2su",
        "usur4",
        "uta4b",
        "u3tat",
        "4ute.",
        "4utel",
        "4uten",
        "uten4i",
        "4u1t2i",
        "uti5liz",
        "u3tine",
        "ut3ing",
        "ution5a",
        "u4tis",
        "5u5tiz",
        "u4t1l",
        "ut5of",
        "uto5g",
        "uto5matic",
        "u5ton",
        "u4tou",
        "uts4",
        "u3u",
        "uu4m",
        "u1v2",
        "uxu3",
        "uz4e",
        "1va",
        "5va.",
        "2v1a4b",
        "vac5il",
        "vac3u",
        "vag4",
        "va4ge",
        "va5lie",
        "val5o",
        "val1u",
        "va5mo",
        "va5niz",
        "va5pi",
        "var5ied",
        "3vat",
        "4ve.",
        "4ved",
        "veg3",
        "v3el.",
        "vel3li",
        "ve4lo",
        "v4ely",
        "ven3om",
        "v5enue",
        "v4erd",
        "5vere.",
        "v4erel",
        "v3eren",
        "ver5enc",
        "v4eres",
        "ver3ie",
        "vermi4n",
        "3verse",
        "ver3th",
        "v4e2s",
        "4ves.",
        "ves4te",
        "ve4te",
        "vet3er",
        "ve4ty",
        "vi5ali",
        "5vian",
        "5vide.",
        "5vided",
        "4v3iden",
        "5vides",
        "5vidi",
        "v3if",
        "vi5gn",
        "vik4",
        "2vil",
        "5vilit",
        "v3i3liz",
        "v1in",
        "4vi4na",
        "v2inc",
        "vin5d",
        "4ving",
        "vio3l",
        "v3io4r",
        "vi1ou",
        "vi4p",
        "vi5ro",
        "vis3it",
        "vi3so",
        "vi3su",
        "4viti",
        "vit3r",
        "4vity",
        "3viv",
        "5vo.",
        "voi4",
        "3vok",
        "vo4la",
        "v5ole",
        "5volt",
        "3volv",
        "vom5i",
        "vor5ab",
        "vori4",
        "vo4ry",
        "vo4ta",
        "4votee",
        "4vv4",
        "v4y",
        "w5abl",
        "2wac",
        "wa5ger",
        "wag5o",
        "wait5",
        "w5al.",
        "wam4",
        "war4t",
        "was4t",
        "wa1te",
        "wa5ver",
        "w1b",
        "wea5rie",
        "weath3",
        "wed4n",
        "weet3",
        "wee5v",
        "wel4l",
        "w1er",
        "west3",
        "w3ev",
        "whi4",
        "wi2",
        "wil2",
        "will5in",
        "win4de",
        "win4g",
        "wir4",
        "3wise",
        "with3",
        "wiz5",
        "w4k",
        "wl4es",
        "wl3in",
        "w4no",
        "1wo2",
        "wom1",
        "wo5ven",
        "w5p",
        "wra4",
        "wri4",
        "writa4",
        "w3sh",
        "ws4l",
        "ws4pe",
        "w5s4t",
        "4wt",
        "wy4",
        "x1a",
        "xac5e",
        "x4ago",
        "xam3",
        "x4ap",
        "xas5",
        "x3c2",
        "x1e",
        "xe4cuto",
        "x2ed",
        "xer4i",
        "xe5ro",
        "x1h",
        "xhi2",
        "xhil5",
        "xhu4",
        "x3i",
        "xi5a",
        "xi5c",
        "xi5di",
        "x4ime",
        "xi5miz",
        "x3o",
        "x4ob",
        "x3p",
        "xpan4d",
        "xpecto5",
        "xpe3d",
        "x1t2",
        "x3ti",
        "x1u",
        "xu3a",
        "xx4",
        "y5ac",
        "3yar4",
        "y5at",
        "y1b",
        "y1c",
        "y2ce",
        "yc5er",
        "y3ch",
        "ych4e",
        "ycom4",
        "ycot4",
        "y1d",
        "y5ee",
        "y1er",
        "y4erf",
        "yes4",
        "ye4t",
        "y5gi",
        "4y3h",
        "y1i",
        "y3la",
        "ylla5bl",
        "y3lo",
        "y5lu",
        "ymbol5",
        "yme4",
        "ympa3",
        "yn3chr",
        "yn5d",
        "yn5g",
        "yn5ic",
        "5ynx",
        "y1o4",
        "yo5d",
        "y4o5g",
        "yom4",
        "yo5net",
        "y4ons",
        "y4os",
        "y4ped",
        "yper5",
        "yp3i",
        "y3po",
        "y4poc",
        "yp2ta",
        "y5pu",
        "yra5m",
        "yr5ia",
        "y3ro",
        "yr4r",
        "ys4c",
        "y3s2e",
        "ys3ica",
        "ys3io",
        "3ysis",
        "y4so",
        "yss4",
        "ys1t",
        "ys3ta",
        "ysur4",
        "y3thin",
        "yt3ic",
        "y1w",
        "za1",
        "z5a2b",
        "zar2",
        "4zb",
        "2ze",
        "ze4n",
        "ze4p",
        "z1er",
        "ze3ro",
        "zet4",
        "2z1i",
        "z4il",
        "z4is",
        "5zl",
        "4zm",
        "1zo",
        "zo4m",
        "zo5ol",
        "zte4",
        "4z1z2",
        "z4zy",
        // hyphen.tex patterns end here, and additional patterns begin:
        ".con5gr",
        ".de5riva",
        ".dri5v4",
        ".eth1y6l1",
        ".eu4ler",
        ".ev2",
        ".ever5si5b",
        ".ga4s1om1",
        ".ge4ome",
        ".ge5ot1",
        ".he3mo1",
        ".he3p6a",
        ".he3roe",
        ".in5u2t",
        ".kil2n3i",
        ".ko6r1te1",
        ".le6ices",
        ".me4ga1l",
        ".met4ala",
        ".mim5i2c1",
        ".mi1s4ers",
        ".ne6o3f",
        ".noe1th",
        ".non1e2m",
        ".poly1s",
        ".post1am",
        ".pre1am",
        ".rav5en1o",
        ".semi5",
        ".sem4ic",
        ".semid6",
        ".semip4",
        ".semir4",
        ".sem6is4",
        ".semiv4",
        ".sph6in1",
        ".spin1o",
        ".ta5pes1tr",
        ".te3legr",
        ".to6pog",
        ".to2q",
        ".un3at5t",
        ".un5err5",
        ".vi2c3ar",
        ".we2b1l",
        ".re1e4c",
        "a5bolic",
        "a2cabl",
        "af6fish",
        "am1en3ta5b",
        "anal6ys",
        "ano5a2c",
        "ans5gr",
        "ans3v",
        "anti1d",
        "an3ti1n2",
        "anti1re",
        "a4pe5able",
        "ar3che5t",
        "ar2range",
        "as5ymptot",
        "ath3er1o1s",
        "at6tes.",
        "augh4tl",
        "au5li5f",
        "av3iou",
        "back2er.",
        "ba6r1onie",
        "ba1thy",
        "bbi4t",
        "be2vie",
        "bi5d2if",
        "bil2lab",
        "bio5m",
        "bi1orb",
        "bio1rh",
        "b1i3tive",
        "blan2d1",
        "blin2d1",
        "blon2d2",
        "bor1no5",
        "bo2t1u1l",
        "brus4q",
        "bus6i2er",
        "bus6i2es",
        "buss4ing",
        "but2ed.",
        "but4ted",
        "cad5e1m",
        "cat1a1s2",
        "4chs.",
        "chs3hu",
        "chie5vo",
        "cig3a3r",
        "cin2q",
        "cle4ar",
        "co6ph1o3n",
        "cous2ti",
        "cri3tie",
        "croc1o1d",
        "cro5e2co",
        "c2tro3me6c",
        "1cu2r1ance",
        "2d3alone",
        "data1b",
        "dd5a5b",
        "d2d5ib",
        "de4als.",
        "de5clar1",
        "de2c5lina",
        "de3fin3iti",
        "de2mos",
        "des3ic",
        "de2tic",
        "dic1aid",
        "dif5fra",
        "3di1methy",
        "di2ren",
        "di2rer",
        "2d1lead",
        "2d1li2e",
        "3do5word",
        "dren1a5l",
        "drif2t1a",
        "d1ri3pleg5",
        "drom3e5d",
        "d3tab",
        "du2al.",
        "du1op1o1l",
        "ea4n3ies",
        "e3chas",
        "edg1l",
        "ed1uling",
        "eli2t1is",
        "e1loa",
        "en1dix",
        "eo3grap",
        "1e6p3i3neph1",
        "e2r3i4an.",
        "e3spac6i",
        "eth1y6l1ene",
        "5eu2clid1",
        "feb1rua",
        "fermi1o",
        "3fich",
        "fit5ted.",
        "fla1g6el",
        "flow2er.",
        "3fluor",
        "gen2cy.",
        "ge3o1d",
        "ght1we",
        "g1lead",
        "get2ic.",
        "4g1lish",
        "5glo5bin",
        "1g2nac",
        "gnet1ism",
        "gno5mo",
        "g2n1or.",
        "g2noresp",
        "2g1o4n3i1za",
        "graph5er.",
        "griev1",
        "g1utan",
        "hair1s",
        "ha2p3ar5r",
        "hatch1",
        "hex2a3",
        "hite3sid",
        "h3i5pel1a4",
        "hnau3z",
        "ho6r1ic.",
        "h2t1eou",
        "hypo1tha",
        "id4ios",
        "ifac1et",
        "ign4it",
        "ignit1er",
        "i4jk",
        "im3ped3a",
        "infra1s2",
        "i5nitely.",
        "irre6v3oc",
        "i1tesima",
        "ith5i2l",
        "itin5er5ar",
        "janu3a",
        "japan1e2s",
        "je1re1m",
        "1ke6ling",
        "1ki5netic",
        "1kovian",
        "k3sha",
        "la4c3i5e",
        "lai6n3ess",
        "lar5ce1n",
        "l3chai",
        "l3chil6d1",
        "lead6er.",
        "lea4s1a",
        "1lec3ta6b",
        "le3g6en2dre",
        "1le1noid",
        "lith1o5g",
        "ll1fl",
        "l2l3ish",
        "l5mo3nell",
        "lo1bot1o1",
        "lo2ges.",
        "load4ed.",
        "load6er.",
        "l3tea",
        "lth5i2ly",
        "lue1p",
        "1lunk3er",
        "1lum5bia.",
        "3lyg1a1mi",
        "ly5styr",
        "ma1la1p",
        "m2an.",
        "man3u1sc",
        "mar1gin1",
        "medi2c",
        "med3i3cin",
        "medio6c1",
        "me3gran3",
        "m2en.",
        "3mi3da5b",
        "3milita",
        "mil2l1ag",
        "mil5li5li",
        "mi6n3is.",
        "mi1n2ut1er",
        "mi1n2ut1est",
        "m3ma1b",
        "5maph1ro1",
        "5moc1ra1t",
        "mo5e2las",
        "mol1e5c",
        "mon4ey1l",
        "mono3ch",
        "mo4no1en",
        "moro6n5is",
        "mono1s6",
        "moth4et2",
        "m1ou3sin",
        "m5shack2",
        "mu2dro",
        "mul2ti5u",
        "n3ar4chs.",
        "n3ch2es1t",
        "ne3back",
        "2ne1ski",
        "n1dieck",
        "nd3thr",
        "nfi6n3ites",
        "4n5i4an.",
        "nge5nes",
        "ng1ho",
        "ng1spr",
        "nk3rup",
        "n5less",
        "5noc3er1os",
        "nom1a6l",
        "nom5e1no",
        "n1o1mist",
        "non1eq",
        "non1i4so",
        "5nop1oly.",
        "no1vemb",
        "ns5ceiv",
        "ns4moo",
        "ntre1p",
        "obli2g1",
        "o3chas",
        "odel3li",
        "odit1ic",
        "oerst2",
        "oke1st",
        "o3les3ter",
        "oli3gop1o1",
        "o1lo3n4om",
        "o3mecha6",
        "onom1ic",
        "o3norma",
        "o3no2t1o3n",
        "o3nou",
        "op1ism.",
        "or4tho3ni4t",
        "orth1ri",
        "or5tively",
        "o4s3pher",
        "o5test1er",
        "o5tes3tor",
        "oth3e1o1s",
        "ou3ba3do",
        "o6v3i4an.",
        "oxi6d1ic",
        "pal6mat",
        "parag6ra4",
        "par4a1le",
        "param4",
        "para3me",
        "pee2v1",
        "phi2l3ant",
        "phi5lat1e3l",
        "pi2c1a3d",
        "pli2c1ab",
        "pli5nar",
        "poin3ca",
        "1pole.",
        "poly1e",
        "po3lyph1ono",
        "1prema3c",
        "pre1neu",
        "pres2pli",
        "pro2cess",
        "proc3i3ty.",
        "pro2g1e",
        "3pseu2d",
        "pseu3d6o3d2",
        "pseu3d6o3f2",
        "pto3mat4",
        "p5trol3",
        "pu5bes5c",
        "quain2t1e",
        "qu6a3si3",
        "quasir6",
        "quasis6",
        "quin5tes5s",
        "qui3v4ar",
        "r1abolic",
        "3rab1o1loi",
        "ra3chu",
        "r3a3dig",
        "radi1o6g",
        "r2amen",
        "3ra4m5e1triz",
        "ra3mou",
        "ra5n2has",
        "ra1or",
        "r3bin1ge",
        "re2c3i1pr",
        "rec5t6ang",
        "re4t1ribu",
        "r3ial.",
        "riv1o1l",
        "6rk.",
        "rk1ho",
        "r1krau",
        "6rks.",
        "r5le5qu",
        "ro1bot1",
        "ro5e2las",
        "ro5epide1",
        "ro3mesh",
        "ro1tron",
        "r3pau5li",
        "rse1rad1i",
        "r1thou",
        "r1treu",
        "r1veil",
        "rz1sc",
        "sales3c",
        "sales5w",
        "5sa3par5il",
        "sca6p1er",
        "sca2t1ol",
        "s4chitz",
        "schro1ding1",
        "1sci2utt",
        "scrap4er.",
        "scy4th1",
        "sem1a1ph",
        "se3mes1t",
        "se1mi6t5ic",
        "sep3temb",
        "shoe1st",
        "sid2ed.",
        "side5st",
        "side5sw",
        "si5resid",
        "sky1sc",
        "3slova1kia",
        "3s2og1a1my",
        "so2lute",
        "3s2pace",
        "1s2pacin",
        "spe3cio",
        "spher1o",
        "spi2c1il",
        "spokes5w",
        "sports3c",
        "sports3w",
        "s3qui3to",
        "s2s1a3chu1",
        "ss3hat",
        "s2s3i4an.",
        "s5sign5a3b",
        "1s2tamp",
        "s2t1ant5shi",
        "star3tli",
        "sta1ti",
        "st5b",
        "1stor1ab",
        "strat1a1g",
        "strib5ut",
        "st5scr",
        "stu1pi4d1",
        "styl1is",
        "su2per1e6",
        "1sync",
        "1syth3i2",
        "swimm6",
        "5tab1o1lism",
        "ta3gon.",
        "talk1a5",
        "t1a1min",
        "t6ap6ath",
        "5tar2rh",
        "tch1c",
        "tch3i1er",
        "t1cr",
        "teach4er.",
        "tele2g",
        "tele1r6o",
        "3ter1gei",
        "ter2ic.",
        "t3ess2es",
        "tha4l1am",
        "tho3don",
        "th1o5gen1i",
        "tho1k2er",
        "thy4l1an",
        "thy3sc",
        "2t3i4an.",
        "ti2n3o1m",
        "t1li2er",
        "tolo2gy",
        "tot3ic",
        "trai3tor1",
        "tra1vers",
        "travers3a3b",
        "treach1e",
        "tr4ial.",
        "3tro1le1um",
        "trof4ic.",
        "tro3fit",
        "tro1p2is",
        "3trop1o5les",
        "3trop1o5lis",
        "t1ro1pol3it",
        "tsch3ie",
        "ttrib1ut1",
        "turn3ar",
        "t1wh",
        "ty2p5al",
        "ua3drati",
        "uad1ratu",
        "u5do3ny",
        "uea1m",
        "u2r1al.",
        "uri4al.",
        "us2er.",
        "v1ativ",
        "v1oir5du1",
        "va6guer",
        "vaude3v",
        "1verely.",
        "v1er1eig",
        "ves1tite",
        "vi1vip3a3r",
        "voice1p",
        "waste3w6a2",
        "wave1g4",
        "w3c",
        "week1n",
        "wide5sp",
        "wo4k1en",
        "wrap3aro",
        "writ6er.",
        "x1q",
        "xquis3",
        "y5che3d",
        "ym5e5try",
        "y1stro",
        "yes5ter1y",
        "z3ian.",
        "z3o1phr",
        "z2z3w",
        // end of additional patterns.
        ""
    ];
    // DEK's hyphenation exception list, from hyphen.tex; not changed.
    var hyphenation = [
        "as-so-ciate",
        "as-so-ciates",
        "dec-li-na-tion",
        "oblig-a-tory",
        "phil-an-thropic",
        "present",
        "presents",
        "project",
        "projects",
        "reci-procity",
        "re-cog-ni-zance",
        "ref-or-ma-tion",
        "ret-ri-bu-tion",
        "ta-ble",
        ""
    ];
    return {
        patterns: patterns,
        exceptions: hyphenation
    };
});

},{}],"hBvzf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class TinyGesture {
    constructor(element, options){
        this.element = element;
        this.touchStartX = null;
        this.touchStartY = null;
        this.touchEndX = null;
        this.touchEndY = null;
        this.touchMoveX = null;
        this.touchMoveY = null;
        this.velocityX = null;
        this.velocityY = null;
        this.longPressTimer = null;
        this.doubleTapTimer = null;
        this.doubleTapWaiting = false;
        this.thresholdX = 0;
        this.thresholdY = 0;
        this.disregardVelocityThresholdX = 0;
        this.disregardVelocityThresholdY = 0;
        this.swipingHorizontal = false;
        this.swipingVertical = false;
        this.swipingDirection = null;
        this.swipedHorizontal = false;
        this.swipedVertical = false;
        this.handlers = {
            panstart: [],
            panmove: [],
            panend: [],
            swipeleft: [],
            swiperight: [],
            swipeup: [],
            swipedown: [],
            tap: [],
            doubletap: [],
            longpress: []
        };
        this._onTouchStart = this.onTouchStart.bind(this);
        this._onTouchMove = this.onTouchMove.bind(this);
        this._onTouchEnd = this.onTouchEnd.bind(this);
        this.opts = Object.assign({}, TinyGesture.defaults, options);
        this.element.addEventListener("touchstart", this._onTouchStart, passiveIfSupported);
        this.element.addEventListener("touchmove", this._onTouchMove, passiveIfSupported);
        this.element.addEventListener("touchend", this._onTouchEnd, passiveIfSupported);
        if (this.opts.mouseSupport && !("ontouchstart" in window)) {
            this.element.addEventListener("mousedown", this._onTouchStart, passiveIfSupported);
            document.addEventListener("mousemove", this._onTouchMove, passiveIfSupported);
            document.addEventListener("mouseup", this._onTouchEnd, passiveIfSupported);
        }
    }
    destroy() {
        var _a, _b;
        this.element.removeEventListener("touchstart", this._onTouchStart);
        this.element.removeEventListener("touchmove", this._onTouchMove);
        this.element.removeEventListener("touchend", this._onTouchEnd);
        this.element.removeEventListener("mousedown", this._onTouchStart);
        document.removeEventListener("mousemove", this._onTouchMove);
        document.removeEventListener("mouseup", this._onTouchEnd);
        clearTimeout((_a = this.longPressTimer) !== null && _a !== void 0 ? _a : undefined);
        clearTimeout((_b = this.doubleTapTimer) !== null && _b !== void 0 ? _b : undefined);
    }
    on(type, fn) {
        if (this.handlers[type]) {
            this.handlers[type].push(fn);
            return {
                type,
                fn,
                cancel: ()=>this.off(type, fn)
            };
        }
    }
    off(type, fn) {
        if (this.handlers[type]) {
            const idx = this.handlers[type].indexOf(fn);
            if (idx !== -1) this.handlers[type].splice(idx, 1);
        }
    }
    fire(type, event) {
        for(let i = 0; i < this.handlers[type].length; i++)this.handlers[type][i](event);
    }
    onTouchStart(event) {
        this.thresholdX = this.opts.threshold("x", this);
        this.thresholdY = this.opts.threshold("y", this);
        this.disregardVelocityThresholdX = this.opts.disregardVelocityThreshold("x", this);
        this.disregardVelocityThresholdY = this.opts.disregardVelocityThreshold("y", this);
        this.touchStartX = event.type === "mousedown" ? event.screenX : event.changedTouches[0].screenX;
        this.touchStartY = event.type === "mousedown" ? event.screenY : event.changedTouches[0].screenY;
        this.touchMoveX = null;
        this.touchMoveY = null;
        this.touchEndX = null;
        this.touchEndY = null;
        this.swipingDirection = null;
        this.longPressTimer = setTimeout(()=>this.fire("longpress", event), this.opts.longPressTime);
        this.fire("panstart", event);
    }
    onTouchMove(event) {
        var _a, _b, _c, _d, _e;
        if (event.type === "mousemove" && (!this.touchStartX || this.touchEndX !== null)) return;
        const touchMoveX = (event.type === "mousemove" ? event.screenX : event.changedTouches[0].screenX) - ((_a = this.touchStartX) !== null && _a !== void 0 ? _a : 0);
        this.velocityX = touchMoveX - ((_b = this.touchMoveX) !== null && _b !== void 0 ? _b : 0);
        this.touchMoveX = touchMoveX;
        const touchMoveY = (event.type === "mousemove" ? event.screenY : event.changedTouches[0].screenY) - ((_c = this.touchStartY) !== null && _c !== void 0 ? _c : 0);
        this.velocityY = touchMoveY - ((_d = this.touchMoveY) !== null && _d !== void 0 ? _d : 0);
        this.touchMoveY = touchMoveY;
        const absTouchMoveX = Math.abs(this.touchMoveX);
        const absTouchMoveY = Math.abs(this.touchMoveY);
        this.swipingHorizontal = absTouchMoveX > this.thresholdX;
        this.swipingVertical = absTouchMoveY > this.thresholdY;
        this.swipingDirection = absTouchMoveX > absTouchMoveY ? this.swipingHorizontal ? "horizontal" : "pre-horizontal" : this.swipingVertical ? "vertical" : "pre-vertical";
        if (Math.max(absTouchMoveX, absTouchMoveY) > this.opts.pressThreshold) clearTimeout((_e = this.longPressTimer) !== null && _e !== void 0 ? _e : undefined);
        this.fire("panmove", event);
    }
    onTouchEnd(event) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if (event.type === "mouseup" && (!this.touchStartX || this.touchEndX !== null)) return;
        this.touchEndX = event.type === "mouseup" ? event.screenX : event.changedTouches[0].screenX;
        this.touchEndY = event.type === "mouseup" ? event.screenY : event.changedTouches[0].screenY;
        this.fire("panend", event);
        clearTimeout((_a = this.longPressTimer) !== null && _a !== void 0 ? _a : undefined);
        const x = this.touchEndX - ((_b = this.touchStartX) !== null && _b !== void 0 ? _b : 0);
        const absX = Math.abs(x);
        const y = this.touchEndY - ((_c = this.touchStartY) !== null && _c !== void 0 ? _c : 0);
        const absY = Math.abs(y);
        if (absX > this.thresholdX || absY > this.thresholdY) {
            this.swipedHorizontal = this.opts.diagonalSwipes ? Math.abs(x / y) <= this.opts.diagonalLimit : absX >= absY && absX > this.thresholdX;
            this.swipedVertical = this.opts.diagonalSwipes ? Math.abs(y / x) <= this.opts.diagonalLimit : absY > absX && absY > this.thresholdY;
            if (this.swipedHorizontal) {
                if (x < 0) {
                    if (((_d = this.velocityX) !== null && _d !== void 0 ? _d : 0) < -this.opts.velocityThreshold || x < -this.disregardVelocityThresholdX) this.fire("swipeleft", event);
                } else if (((_e = this.velocityX) !== null && _e !== void 0 ? _e : 0) > this.opts.velocityThreshold || x > this.disregardVelocityThresholdX) this.fire("swiperight", event);
            }
            if (this.swipedVertical) {
                if (y < 0) {
                    if (((_f = this.velocityY) !== null && _f !== void 0 ? _f : 0) < -this.opts.velocityThreshold || y < -this.disregardVelocityThresholdY) this.fire("swipeup", event);
                } else if (((_g = this.velocityY) !== null && _g !== void 0 ? _g : 0) > this.opts.velocityThreshold || y > this.disregardVelocityThresholdY) this.fire("swipedown", event);
            }
        } else if (absX < this.opts.pressThreshold && absY < this.opts.pressThreshold) {
            if (this.doubleTapWaiting) {
                this.doubleTapWaiting = false;
                clearTimeout((_h = this.doubleTapTimer) !== null && _h !== void 0 ? _h : undefined);
                this.fire("doubletap", event);
            } else {
                this.doubleTapWaiting = true;
                this.doubleTapTimer = setTimeout(()=>this.doubleTapWaiting = false, this.opts.doubleTapTime);
                this.fire("tap", event);
            }
        }
    }
}
exports.default = TinyGesture;
TinyGesture.defaults = {
    threshold: (type, _self)=>Math.max(25, Math.floor(0.15 * (type === "x" ? window.innerWidth || document.body.clientWidth : window.innerHeight || document.body.clientHeight))),
    velocityThreshold: 10,
    disregardVelocityThreshold: (type, self)=>Math.floor(0.5 * (type === "x" ? self.element.clientWidth : self.element.clientHeight)),
    pressThreshold: 8,
    diagonalSwipes: false,
    diagonalLimit: Math.tan(0.375 * Math.PI),
    longPressTime: 500,
    doubleTapTime: 300,
    mouseSupport: true
};
let passiveIfSupported = false;
try {
    window.addEventListener("test", null, Object.defineProperty({}, "passive", {
        get: function() {
            passiveIfSupported = {
                passive: true
            };
        }
    }));
} catch (err) {}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["9U7b9","h9tGv"], "h9tGv", "parcelRequireec8e")

//# sourceMappingURL=dashboard.d47e1912.js.map
