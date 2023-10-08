//@ui5-bundle RiskManagement/Risk/Component-preload.js
sap.ui.require.preload({
	"RiskManagement/Risk/Component.js":function(){
sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("RiskManagement.Risk.Component",{metadata:{manifest:"json"}})});
},
	"RiskManagement/Risk/i18n/i18n.properties":'# This is the resource bundle for RiskManagement.Risk\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Risk\n\n#YDES: Application description\nappDescription=UI for Risk app\n\nflpTitle=Risk\n\nflpSubtitle=\n',
	"RiskManagement/Risk/manifest.json":'{"_version":"1.48.0","sap.app":{"id":"RiskManagement.Risk","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.11.1","toolsId":"2b0cb8b4-3c99-4e05-b536-5b3ae2ec665d"},"dataSources":{"mainService":{"uri":"service/RiskManagement/","type":"OData","settings":{"annotations":[],"localUri":"localService/metadata.xml","odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"RiskManagementRisk-display":{"semanticObject":"RiskManagementRisk","action":"display","title":"{{flpTitle}}","subTitle":"{{flpSubtitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.108.7","libs":{"sap.m":{},"sap.ui.core":{},"sap.ushell":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"RiskManagement.Risk.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"config":{},"routes":[{"pattern":":?query:","name":"RiskList","target":"RiskList"},{"pattern":"Risk({key}):?query:","name":"RiskObjectPage","target":"RiskObjectPage"}],"targets":{"RiskList":{"type":"Component","id":"RiskList","name":"sap.fe.templates.ListReport","options":{"settings":{"entitySet":"Risk","variantManagement":"Page","navigation":{"Risk":{"detail":{"route":"RiskObjectPage"}}}}}},"RiskObjectPage":{"type":"Component","id":"RiskObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"entitySet":"Risk"}}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"},"sap.cloud":{"public":true,"service":"lcap.RiskManagement"}}'
});
//# sourceMappingURL=Component-preload.js.map
