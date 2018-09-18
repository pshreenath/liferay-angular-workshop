<%@ include file="/init.jsp" %>

<div id="angular-six-demo-root"></div>

<aui:script require="angular-six-demo@1.0.0"> <%-- Name as it appears in your package.json --%>
	angularSixDemo100.default('<portlet:namespace />'); <%-- Name as it appears in your package.json in camel-case form, with its version appended without '.'s --%>
</aui:script>