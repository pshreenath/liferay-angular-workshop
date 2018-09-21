<%@ include file="/init.jsp" %>

<div id="npm-angular-demo-root"></div>

<aui:script require="npm-angular-demo@1.0.0"> <%-- Name as it appears in your package.json --%>
	npmAngularDemo100.default('<portlet:namespace />'); <%-- Name as it appears in your package.json in camel-case form, with its version appended without '.'s --%>
</aui:script>