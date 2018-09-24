<%@ include file="/init.jsp" %>

<div id="routing-demo-root"></div>

<aui:script require="routing-demo@1.0.0"> <%-- Name as it appears in your package.json --%>
	routingDemo100.default('<portlet:namespace />'); <%-- Name as it appears in your package.json in camel-case form, with its version appended without '.'s --%>
</aui:script>