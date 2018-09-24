package com.liferay.lsna.instanceable.demo.portlet;

import com.liferay.lsna.instanceable.demo.constants.InstanceableDemoPortletKeys;
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
		"javax.portlet.display-name=Instanceable HTTP Client Demo", "javax.portlet.init-param.template-path=/",
		"javax.portlet.init-param.view-template=/view.jsp",
		"javax.portlet.name=" + InstanceableDemoPortletKeys.INSTANCEABLE_DEMO,
		"javax.portlet.resource-bundle=content.Language",
		"javax.portlet.security-role-ref=power-user,user"
	},
	service = Portlet.class
)
public class InstanceableDemoPortlet extends MVCPortlet {

}