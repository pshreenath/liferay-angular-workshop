package com.liferay.lsna.http.demo.portlet;

import com.liferay.lsna.http.demo.constants.HttpClientDemoPortletKeys;

import com.liferay.portal.kernel.portlet.bridges.mvc.MVCPortlet;

import javax.portlet.Portlet;

import org.osgi.service.component.annotations.Component;

/**
 * @author Douglas Prandini
 */
@Component(
	immediate = true,
	property = {
		"com.liferay.portlet.display-category=Angular", "com.liferay.portlet.instanceable=true",
		"javax.portlet.display-name=Http Client Demo", "javax.portlet.init-param.template-path=/",
		"javax.portlet.init-param.view-template=/view.jsp",
		"javax.portlet.name=" + HttpClientDemoPortletKeys.HTTP_CLIENT_DEMO, "javax.portlet.resource-bundle=content.Language",
		"javax.portlet.security-role-ref=power-user,user"
	},
	service = Portlet.class
)
public class HttpClientDemoPortlet extends MVCPortlet {
}