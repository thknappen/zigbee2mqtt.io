"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[77768],{19444:(n,a,s)=>{s.r(a),s.d(a,{comp:()=>h,data:()=>k});var e=s(24691);const t=s.p+"assets/img/01_sign_up.15520386.png",o=s.p+"assets/img/04_create_cloud_project.4325eb57.png",c=s.p+"assets/img/05_project_creation.8317cc1e.png",p=s.p+"assets/img/07_link_tuya_account.d75fc805.png",i=s.p+"assets/img/08_devices.a8c64880.png",l=s.p+"assets/img/09_device_logs.1435750f.png",u=s.p+"assets/img/11_automatic_data_points_fetch.f811131c.gif",d=s.p+"assets/img/10_dev_tools.5d449195.png",r={},h=(0,s(89260).A)(r,[["render",function(n,a){return(0,e.uX)(),(0,e.CE)("div",null,a[0]||(a[0]=[(0,e.Fv)('<h1 id="find-tuya-data-points" tabindex="-1"><a class="header-anchor" href="#find-tuya-data-points"><span>Find Tuya Data Points</span></a></h1><p>Tuya devices use a custom <code>manuSpecificTuya</code> cluster. Within the reported values of this cluster&#39;s data is a dp (so called “Data Point ID”) which is at the core of Tuya devices. From the point of view of a device the DPIDs are the functions that the device provides. The instructions below will help you use the Tuya IoT Platform with a Tuya gateway to determine the functions of the datapoints which, will later assist in the creation of a device converter.</p><h2 id="requirements-and-caveats" tabindex="-1"><a class="header-anchor" href="#requirements-and-caveats"><span>Requirements and caveats</span></a></h2><ol><li>You will need an up-to-date version of Google Chrome (other browsers may work but, instructions may differ)</li><li>You will require basic knowledge of using Chrome and its Dev Tools</li><li>You will need to sign up for the Tuya IoT Platform and bind your accounts (more details below)</li><li>You will require a Tuya Zigbee Gateway</li><li>You will need the Tuya app (with the orange icon) installed on your mobile device</li></ol><h2 id="instructions" tabindex="-1"><a class="header-anchor" href="#instructions"><span>Instructions</span></a></h2><h3 id="_1-standard-part-of-the-setup" tabindex="-1"><a class="header-anchor" href="#_1-standard-part-of-the-setup"><span>1. Standard part of the setup</span></a></h3><p>Ensure that you have set up a Tuya account and bound your Zigbee device to the Tuya gateway (these instructions will assume this has already been done).</p><h3 id="_2-signin-up-for-tuya-iot-platform" tabindex="-1"><a class="header-anchor" href="#_2-signin-up-for-tuya-iot-platform"><span>2. Signin up for Tuya IoT Platform</span></a></h3><p>The Tuya IoT Platform is the backbone for how internet connected Tuya devices communicate back to the Tuya platform. It contains a suite of Application Programming Interfaces (API&#39;s) which allow for developers to embed the Tuya functionality within their own platforms.</p><p>Visit <a href="https://iot.tuya.com/" target="_blank" rel="noopener noreferrer">Tuya IoT Platform</a> and sign up for a new account (if you don&#39;t already have one):</p><p><img src="'+t+'" alt="01_sign_up"></p><h3 id="_3-login" tabindex="-1"><a class="header-anchor" href="#_3-login"><span>3. Login</span></a></h3><p>Use your new credentials to login to the Tuya IoT Platform. You will be greeted with a first time tutorial showing you around the platform. At the end of the tutorial select <code>Individual Developer</code>. If you miss this, click on the <code>person</code> icon in the right-top -&gt; <code>Account</code> and set <code>Account Type</code> to <code>Individual Developer</code>.</p><h3 id="_4-create-a-cloud-project" tabindex="-1"><a class="header-anchor" href="#_4-create-a-cloud-project"><span>4. Create a cloud project</span></a></h3><p>Click on <code>Cloud</code> in the side menu, <code>Development</code> in the sub-menu and then click on <code>Create Cloud Project</code>.</p><p><img src="'+o+'" alt="04_create_cloud_project"></p><p>In the newly opened dialog box, fill in the details as required, enduring that the Development Method is selected as Smart Home, and the Data Center corresponds to the region that your Tuya account is associated with.</p><p><img src="'+c+'" alt="05_project_creation"></p><p>Once confirmed, a new dialog box will open. Next to <code>Select API Services</code>, click <code>All</code>, click <code>Authorize</code>.</p><h3 id="_5-link-your-tuya-account-with-your-new-tuya-project" tabindex="-1"><a class="header-anchor" href="#_5-link-your-tuya-account-with-your-new-tuya-project"><span>5. Link your Tuya account with your new Tuya project</span></a></h3><p>Once confirmed, you should be taken to your new Tuya project. Click on, <code>Devices</code>, <code>Link Tuya App Account</code>, then <code>Add App Account</code>.</p><p><img src="'+p+'" alt="07_link_tuya_account"></p><p>This should bring up a QR code. Go in to the Tuya app on your mobile device, click on <code>[+]</code> (as id you are adding a new device). At the top of the screen, you will see a scan barcode button <code>[-]</code>. Click the <code>[-]</code> button and give permissions to use the camera (if prompted). Scan the QR code with your mobile device, and press <code>Confirm login</code>. On your computer a pop-up <code>Link Tuya App Account</code> will be shown. Set <code>Device Linking Method</code> to <code>Automatic Link</code>, <code>Device Permission</code> to <code>Read, write, and Manage</code> and click <code>Ok</code>. You will get a pop-up showing the amount of devices was added, close this.</p><h3 id="_6-find-your-devices" tabindex="-1"><a class="header-anchor" href="#_6-find-your-devices"><span>6. Find your devices</span></a></h3><p>Click on the <code>All Devices</code> and find the device in-which you wish to find the Data Points. Click on <code>Debug Device</code>. If you do not find your device in the list, or the list is empty, please check your project&#39;s region.</p><p><img src="'+i+'" alt="08_devices"></p><h3 id="_7-display-device-logs" tabindex="-1"><a class="header-anchor" href="#_7-display-device-logs"><span>7. Display device logs</span></a></h3><p>Click on the <code>Device Logs</code> tab, and you will see a list of all events that the device has sent to the Tuya platform. Ignore the Event Details section as this appears to be garbage.</p><p><img src="'+l+'" alt="09_device_logs"></p><h3 id="_8-find-your-data-point" tabindex="-1"><a class="header-anchor" href="#_8-find-your-data-point"><span>8. Find your Data Point!!</span></a></h3><h4 id="automatic" tabindex="-1"><a class="header-anchor" href="#automatic"><span><strong>Automatic</strong></span></a></h4><p>Once on the <code>Device Logs</code> tab, open up Dev Tools by pressing <code>ctrl</code> + <code>shift</code> + <code>i</code> (Windows) or <code>cmd</code> + <code>alt</code> + <code>i</code> (macOS) on your keyboard, or going to the <code>3-dot menu</code> at the top-right of the Chrome window-&gt;<code>More Tools</code>-&gt;<code>Dev Tools</code>. When Dev Tools is open, click on the <code>Console</code> Tab, then paste the <a href="#automatic-script">code below</a> in to the console and press <code>Enter</code> on your keyboard. Next, open the <code>DP ID</code> drop-down list and hover over each item. The running code will automatically fetch the data point ID for each item. Once you have finished, run <code>export_codes()</code> in the console. This will output the data point ID-Name correspondences.</p><p><img src="'+u+'" alt="11_automatic_data_points_fetch"></p><h5 id="automatic-script" tabindex="-1"><a class="header-anchor" href="#automatic-script"><span><em>Automatic script</em></span></a></h5><blockquote><p>WARNING: Never run code that you do not understand. It is your responsibility to ensure that you understand what the code is doing before running it.</p></blockquote><p>The code of the selected/hovered data point ID in the drop-down list as well as the previous and the next IDs are stored in the DOM under <code>&lt;div id=&quot;code_list&quot;&gt;</code>. The code below fetches these three codes each time the div is updated and stores them in the dictionary <code>codes</code>.</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">waitForElm</span><span class="token punctuation">(</span><span class="token parameter">selector</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token doc-comment comment">/** Wait for an HTML element to appear in the DOM.</span>\n<span class="line">     *</span>\n<span class="line">     * Answer of Yong Wang (https://stackoverflow.com/users/4556536/yong-wang) to</span>\n<span class="line">     * https://stackoverflow.com/questions/5525071/how-to-wait-until-an-element-exists</span>\n<span class="line">     */</span></span>\n<span class="line">    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>\n<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span>selector<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">resolve</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span>selector<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line">        <span class="token keyword">const</span> observer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MutationObserver</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">mutations</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>\n<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span>selector<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">                <span class="token function">resolve</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span>selector<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">                observer<span class="token punctuation">.</span><span class="token function">disconnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">            <span class="token punctuation">}</span></span>\n<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line">        observer<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>body<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">childList</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">subtree</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line"><span class="token keyword">let</span> codes_selector <span class="token operator">=</span> <span class="token string">&#39;#code_list&#39;</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token keyword">let</span> codes <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line"><span class="token comment">// Wait for the code list to appear in the DOM.</span></span>\n<span class="line"><span class="token function">waitForElm</span><span class="token punctuation">(</span>codes_selector<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">elm</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token comment">// Create an observer to watch for changes and update the codes dictionary.</span></span>\n<span class="line">    <span class="token keyword">var</span> observer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MutationObserver</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">mutations</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>\n<span class="line">        <span class="token keyword">let</span> code_items <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;code_list&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> code_item <span class="token keyword">of</span> code_items<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">            codes<span class="token punctuation">[</span>code_item<span class="token punctuation">.</span>textContent<span class="token punctuation">]</span> <span class="token operator">=</span> code_item<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;aria-label&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">        <span class="token punctuation">}</span></span>\n<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line">    observer<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span>codes_selector<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">childList</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line"><span class="token keyword">function</span> <span class="token function">export_codes</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token doc-comment comment">/** Export the codes dictionary to the console in a copy-friendly format. */</span></span>\n<span class="line">    <span class="token keyword">let</span> codes_str <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>codes<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>codes_str<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="manual" tabindex="-1"><a class="header-anchor" href="#manual"><span><strong>Manual</strong></span></a></h4><p>Select the Data Point for-which you wish to find the ID for in the drop-down list above the events table. Open up Dev Tools by pressing <code>ctrl</code> + <code>shift</code> + <code>i</code> (Windows) or <code>cmd</code> + <code>alt</code> + <code>i</code> (macOS) on your keyboard, or going to the <code>3-dot menu</code> at the top-right of the Chrome window-&gt;<code>More Tools</code>-&gt;<code>Dev Tools</code>. When Dev Tools is open, click on the <code>Network</code> Tab, then click the <code>Search</code> button in the Tuya IoT Platform window.</p><p><img src="'+d+'" alt="10_dev_tools"></p><p>You should see a number of calls appear in the <code>Name</code> section of Dev Tools. The call that we are interested in it <code>list</code>. Click this, and scroll down in the right-hand pane until you see the <code>Request Payload</code> section. Within there, is a json encoded object which contains all of the data sent from the search function. One of the keys is labelled <code>code</code>. This <code>code</code> i.e. 112 is the value for your Data Point ID!</p><h3 id="_9-rinse-and-repeat" tabindex="-1"><a class="header-anchor" href="#_9-rinse-and-repeat"><span>9. Rinse, and repeat!</span></a></h3><p>You should now iterate through each of the Data Points that are available in the drop-down list. Once finished, follow the other How-To guides to map these Data Point&#39;s into converters.</p>',43)]))}]]),k=JSON.parse('{"path":"/advanced/support-new-devices/03_find_tuya_data_points.html","title":"Find Tuya Data Points","lang":"en-US","frontmatter":{"pageClass":"content-page"},"headers":[{"level":2,"title":"Requirements and caveats","slug":"requirements-and-caveats","link":"#requirements-and-caveats","children":[]},{"level":2,"title":"Instructions","slug":"instructions","link":"#instructions","children":[{"level":3,"title":"1. Standard part of the setup","slug":"_1-standard-part-of-the-setup","link":"#_1-standard-part-of-the-setup","children":[]},{"level":3,"title":"2. Signin up for Tuya IoT Platform","slug":"_2-signin-up-for-tuya-iot-platform","link":"#_2-signin-up-for-tuya-iot-platform","children":[]},{"level":3,"title":"3. Login","slug":"_3-login","link":"#_3-login","children":[]},{"level":3,"title":"4. Create a cloud project","slug":"_4-create-a-cloud-project","link":"#_4-create-a-cloud-project","children":[]},{"level":3,"title":"5. Link your Tuya account with your new Tuya project","slug":"_5-link-your-tuya-account-with-your-new-tuya-project","link":"#_5-link-your-tuya-account-with-your-new-tuya-project","children":[]},{"level":3,"title":"6. Find your devices","slug":"_6-find-your-devices","link":"#_6-find-your-devices","children":[]},{"level":3,"title":"7. Display device logs","slug":"_7-display-device-logs","link":"#_7-display-device-logs","children":[]},{"level":3,"title":"8. Find your Data Point!!","slug":"_8-find-your-data-point","link":"#_8-find-your-data-point","children":[]},{"level":3,"title":"9. Rinse, and repeat!","slug":"_9-rinse-and-repeat","link":"#_9-rinse-and-repeat","children":[]}]}],"git":{"updatedTime":1730574193000},"filePathRelative":"advanced/support-new-devices/03_find_tuya_data_points.md"}')}}]);