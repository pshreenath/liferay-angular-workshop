<%@ include file="/init.jsp" %>

<div id="http-client-demo-root"></div>

<aui:script require="http-client-demo@1.0.0"> <%-- Name as it appears in your package.json --%>
	httpClientDemo100.default('<portlet:namespace />'); <%-- Name as it appears in your package.json in camel-case form, with its version appended without '.'s --%>
</aui:script>