$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Feature/Amazon.feature");
formatter.feature({
  "name": "Buy Amazon Kindle",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "name": "Buying Kindle E-Reader",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Go to amazon.ca",
  "keyword": "Given "
});
formatter.match({
  "location": "GeneralStep.go_to_amazon_ca()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on hamburger menu (top left corner)",
  "keyword": "When "
});
formatter.match({
  "location": "GeneralStep.click_on_hamburger_menu_top_left_corner()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select Kindle under Digital Content and Devices",
  "keyword": "Then "
});
formatter.match({
  "location": "GeneralStep.select_kindle_under_digital_content_and_devices()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Kindle under Kindle E-Reader",
  "keyword": "Then "
});
formatter.match({
  "location": "GeneralStep.click_kindle_under_kindle_e_reader()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Buy Now",
  "keyword": "Then "
});
formatter.match({
  "location": "GeneralStep.click_buy_now()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify User is asked for email or mobile number",
  "keyword": "And "
});
formatter.match({
  "location": "GeneralStep.verify_user_is_asked_for_email_or_mobile_number()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "error_message": "java.lang.NoClassDefFoundError: gherkin/formatter/Reporter\r\n\tat java.lang.ClassLoader.defineClass1(Native Method)\r\n\tat java.lang.ClassLoader.defineClass(Unknown Source)\r\n\tat java.security.SecureClassLoader.defineClass(Unknown Source)\r\n\tat java.net.URLClassLoader.defineClass(Unknown Source)\r\n\tat java.net.URLClassLoader.access$100(Unknown Source)\r\n\tat java.net.URLClassLoader$1.run(Unknown Source)\r\n\tat java.net.URLClassLoader$1.run(Unknown Source)\r\n\tat java.security.AccessController.doPrivileged(Native Method)\r\n\tat java.net.URLClassLoader.findClass(Unknown Source)\r\n\tat java.lang.ClassLoader.loadClass(Unknown Source)\r\n\tat sun.misc.Launcher$AppClassLoader.loadClass(Unknown Source)\r\n\tat java.lang.ClassLoader.loadClass(Unknown Source)\r\n\tat com.cucumber.listener.Reporter.getExtentHtmlReport(Reporter.java:29)\r\n\tat com.cucumber.listener.Reporter.loadXMLConfig(Reporter.java:56)\r\n\tat stepDefination.GeneralStep.tearDown(GeneralStep.java:40)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:65)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:50)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:69)\r\n\tat io.cucumber.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:24)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:100)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:646)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:811)\r\n\tat org.testng.internal.TestMethodWithDataProviderMethodWorker.call(TestMethodWithDataProviderMethodWorker.java:75)\r\n\tat org.testng.internal.TestMethodWithDataProviderMethodWorker.call(TestMethodWithDataProviderMethodWorker.java:14)\r\n\tat java.util.concurrent.FutureTask.run(Unknown Source)\r\n\tat java.util.concurrent.Executors$RunnableAdapter.call(Unknown Source)\r\n\tat java.util.concurrent.FutureTask.run(Unknown Source)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(Unknown Source)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(Unknown Source)\r\n\tat java.lang.Thread.run(Unknown Source)\r\nCaused by: java.lang.ClassNotFoundException: gherkin.formatter.Reporter\r\n\tat java.net.URLClassLoader.findClass(Unknown Source)\r\n\tat java.lang.ClassLoader.loadClass(Unknown Source)\r\n\tat sun.misc.Launcher$AppClassLoader.loadClass(Unknown Source)\r\n\tat java.lang.ClassLoader.loadClass(Unknown Source)\r\n\t... 45 more\r\n",
  "status": "failed"
});
});