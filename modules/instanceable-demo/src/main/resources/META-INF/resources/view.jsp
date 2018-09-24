<%@ include file="/META-INF/resources/init.jsp" %>

<div id="<portlet:namespace />"></div>

<aui:script require="instanceable-demo@1.0.0"> <%-- Name as it appears in your package.json --%>
	instanceableDemo100.default('<portlet:namespace />'); <%-- Name as it appears in your package.json in camel-case form, with its version appended without '.'s --%>
</aui:script>