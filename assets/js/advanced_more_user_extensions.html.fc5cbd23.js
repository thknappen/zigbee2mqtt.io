"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[81469],{39716:(n,s,a)=>{a.r(s),a.d(s,{comp:()=>p,data:()=>o});var e=a(24691);const t={},p=(0,a(89260).A)(t,[["render",function(n,s){return(0,e.uX)(),(0,e.CE)("div",null,s[0]||(s[0]=[(0,e.Fv)('<h1 id="user-extensions" tabindex="-1"><a class="header-anchor" href="#user-extensions"><span>User extensions</span></a></h1><p>User extensions is a way to extend Zigbee2MQTT behavior, user extensions works in same way as internal extensions.</p><p>To get familiar with extensions framework please read <a href="https://github.com/Koenkk/zigbee2mqtt/tree/master/lib/extension" target="_blank" rel="noopener noreferrer">source code of internal extensions</a>.</p><p>User extensions are stored in <code>data/extension</code> folder and have to export a JavaScript Class or Function.</p><p>Example:</p><p>File: <code>data/extension/my-first-extension.js</code></p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">MyExampleExtension</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">zigbee<span class="token punctuation">,</span> mqtt<span class="token punctuation">,</span> state<span class="token punctuation">,</span> publishEntityState<span class="token punctuation">,</span> eventBus<span class="token punctuation">,</span> settings<span class="token punctuation">,</span> logger</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>zigbee <span class="token operator">=</span> zigbee<span class="token punctuation">;</span></span>\n<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>mqtt <span class="token operator">=</span> mqtt<span class="token punctuation">;</span></span>\n<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> state<span class="token punctuation">;</span></span>\n<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>publishEntityState <span class="token operator">=</span> publishEntityState<span class="token punctuation">;</span></span>\n<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>eventBus <span class="token operator">=</span> eventBus<span class="token punctuation">;</span></span>\n<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>settings <span class="token operator">=</span> settings<span class="token punctuation">;</span></span>\n<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>logger <span class="token operator">=</span> logger<span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line">        logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&#39;Loaded  MyExampleExtension&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">    <span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line">    <span class="token doc-comment comment">/**</span>\n<span class="line">     * This method is called by the controller once Zigbee2MQTT has been started.</span>\n<span class="line">     */</span></span>\n<span class="line">    <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>mqtt<span class="token punctuation">.</span><span class="token function">publish</span><span class="token punctuation">(</span><span class="token string">&#39;example/extension&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;hello from MyExampleExtension&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line">        <span class="token comment">// All possible events can be seen here: https://github.com/Koenkk/zigbee2mqtt/blob/dev/lib/eventBus.ts</span></span>\n<span class="line"></span>\n<span class="line">        <span class="token comment">// Subscribe to MQTT messages</span></span>\n<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>eventBus<span class="token punctuation">.</span><span class="token function">onMQTTMessage</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>\n<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Received MQTT message on topic &#39;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>data<span class="token punctuation">.</span>topic<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&#39; with message &#39;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>data<span class="token punctuation">.</span>message<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&#39;</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">    <span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line">    <span class="token doc-comment comment">/**</span>\n<span class="line">     * Is called once the extension has to stop</span>\n<span class="line">     */</span></span>\n<span class="line">    <span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>eventBus<span class="token punctuation">.</span><span class="token function">removeListeners</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">    <span class="token punctuation">}</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> MyExampleExtension<span class="token punctuation">;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="user-extensions-list" tabindex="-1"><a class="header-anchor" href="#user-extensions-list"><span>User extensions list</span></a></h2><p>Once Zigbee2MQTT starts it publishes <code>zigbee2mqtt/bridge/extensions</code> with payload <code>[{&quot;name&quot;: &quot;my-first-extension.js&quot;: &quot;code&quot;: &lt;HERE COMES YOUR EXTENSION SOURCE CODE&gt;}]</code> containing all the loaded user extensions.</p><h2 id="save-user-extension" tabindex="-1"><a class="header-anchor" href="#save-user-extension"><span>Save user extension</span></a></h2><p>To save a user extension over the API publish to <code>zigbee2mqtt/bridge/request/extension/save</code> with payload <code>{&quot;name&quot;: &quot;my-first-extension.js&quot;, &quot;code&quot;: &lt;HERE COMES YOUR EXTENSION SOURCE CODE&gt;}</code>.</p><h2 id="remove-user-extension" tabindex="-1"><a class="header-anchor" href="#remove-user-extension"><span>Remove user extension</span></a></h2><p>To remove a user extension over the API publish to <code>zigbee2mqtt/bridge/request/extension/remove</code> with payload <code>{&quot;name&quot;: &quot;my-first-extension.js&quot;}</code>.</p>',13)]))}]]),o=JSON.parse('{"path":"/advanced/more/user_extensions.html","title":"User extensions","lang":"en-US","frontmatter":{"pageClass":"content-page","sidebar":"auto"},"headers":[{"level":2,"title":"User extensions list","slug":"user-extensions-list","link":"#user-extensions-list","children":[]},{"level":2,"title":"Save user extension","slug":"save-user-extension","link":"#save-user-extension","children":[]},{"level":2,"title":"Remove user extension","slug":"remove-user-extension","link":"#remove-user-extension","children":[]}],"git":{"updatedTime":1730574193000},"filePathRelative":"advanced/more/user_extensions.md"}')}}]);