package com.liferay.angular.workshop.portlet;

import com.liferay.angular.workshop.constants.AngularSixDemoPortletKeys;

import com.liferay.portal.kernel.portlet.bridges.mvc.MVCPortlet;

import javax.portlet.Portlet;

import org.osgi.service.component.annotations.Component;

/**
 * @author Prathima Shreenath
 */
@Component(
	immediate = true,
	property = {
		"com.liferay.portlet.display-category=Angular", "com.liferay.portlet.instanceable=true",
		"javax.portlet.display-name=Angular 6 Demo", "javax.portlet.init-param.template-path=/",
		"javax.portlet.init-param.view-template=/view.jsp",
		"javax.portlet.name=" + AngularSixDemoPortletKeys.ANGULAR6_DEMO, "javax.portlet.resource-bundle=content.Language",
		"javax.portlet.security-role-ref=power-user,user"
	},
	service = Portlet.class
)
public class AngularSixDemoPortlet extends MVCPortlet {
}