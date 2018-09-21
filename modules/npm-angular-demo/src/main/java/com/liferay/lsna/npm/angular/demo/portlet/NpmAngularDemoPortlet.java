package com.liferay.lsna.npm.angular.demo.portlet;

import com.liferay.lsna.npm.angular.demo.constants.NpmAngularDemoPortletKeys;

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
		"javax.portlet.display-name=NPM Angular Demo Portlet", "javax.portlet.init-param.template-path=/",
		"javax.portlet.init-param.view-template=/view.jsp",
		"javax.portlet.name=" + NpmAngularDemoPortletKeys.NPM_ANGULAR_PORTLET, "javax.portlet.resource-bundle=content.Language",
		"javax.portlet.security-role-ref=power-user,user"
	},
	service = Portlet.class
)
public class NpmAngularDemoPortlet extends MVCPortlet {
}