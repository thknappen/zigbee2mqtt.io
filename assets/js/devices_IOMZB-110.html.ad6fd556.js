"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[19193],{99406:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>a,data:()=>d});var i=o(24691);const n={},a=(0,o(89260).A)(n,[["render",function(e,t){const o=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[t[8]||(t[8]=(0,i.Lk)("h1",{id:"develco-iomzb-110",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#develco-iomzb-110"},[(0,i.Lk)("span",null,"Develco IOMZB-110")])],-1)),(0,i.Lk)("table",null,[t[6]||(t[6]=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1)),(0,i.Lk)("tbody",null,[t[2]||(t[2]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"IOMZB-110")],-1)),(0,i.Lk)("tr",null,[t[1]||(t[1]=(0,i.Lk)("td",null,"Vendor",-1)),(0,i.Lk)("td",null,[(0,i.bF)(o,{to:"/supported-devices/#v=Develco"},{default:(0,i.k6)((()=>t[0]||(t[0]=[(0,i.eW)("Develco")]))),_:1})])]),t[3]||(t[3]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"IO module")],-1)),t[4]||(t[4]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"input, switch (state), linkquality")],-1)),t[5]||(t[5]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/IOMZB-110.png",alt:"Develco IOMZB-110"})])],-1))])]),t[9]||(t[9]=(0,i.Lk)("h2",{id:"options",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#options"},[(0,i.Lk)("span",null,"Options")])],-1)),(0,i.Lk)("p",null,[(0,i.Lk)("em",null,[(0,i.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.k6)((()=>t[7]||(t[7]=[(0,i.eW)("How to use device type specific configuration")]))),_:1})])]),t[10]||(t[10]=(0,i.Fv)('<ul><li><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="input-binary-l1-endpoint" tabindex="-1"><a class="header-anchor" href="#input-binary-l1-endpoint"><span>Input (binary, l1 endpoint)</span></a></h3><p>State of input 1. Value can be found in the published state on the <code>input_l1</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;input_l1&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. If value equals <code>true</code> input is ON, if <code>false</code> OFF.</p><h3 id="input-binary-l2-endpoint" tabindex="-1"><a class="header-anchor" href="#input-binary-l2-endpoint"><span>Input (binary, l2 endpoint)</span></a></h3><p>State of input 2. Value can be found in the published state on the <code>input_l2</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;input_l2&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. If value equals <code>true</code> input is ON, if <code>false</code> OFF.</p><h3 id="input-binary-l3-endpoint" tabindex="-1"><a class="header-anchor" href="#input-binary-l3-endpoint"><span>Input (binary, l3 endpoint)</span></a></h3><p>State of input 3. Value can be found in the published state on the <code>input_l3</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;input_l3&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. If value equals <code>true</code> input is ON, if <code>false</code> OFF.</p><h3 id="input-binary-l4-endpoint" tabindex="-1"><a class="header-anchor" href="#input-binary-l4-endpoint"><span>Input (binary, l4 endpoint)</span></a></h3><p>State of input 4. Value can be found in the published state on the <code>input_l4</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;input_l4&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. If value equals <code>true</code> input is ON, if <code>false</code> OFF.</p><h3 id="switch-l11-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l11-endpoint"><span>Switch (l11 endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_l11</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l11&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l11&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l11&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_l11&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depends on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="switch-l12-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l12-endpoint"><span>Switch (l12 endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_l12</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l12&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l12&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l12&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_l12&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off-1" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off-1"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depends on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',20))])}]]),d=JSON.parse('{"path":"/devices/IOMZB-110.html","title":"Develco IOMZB-110 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Develco IOMZB-110 control via MQTT","description":"Integrate your Develco IOMZB-110 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-11-01T16:06:49.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Input (binary, l1 endpoint)","slug":"input-binary-l1-endpoint","link":"#input-binary-l1-endpoint","children":[]},{"level":3,"title":"Input (binary, l2 endpoint)","slug":"input-binary-l2-endpoint","link":"#input-binary-l2-endpoint","children":[]},{"level":3,"title":"Input (binary, l3 endpoint)","slug":"input-binary-l3-endpoint","link":"#input-binary-l3-endpoint","children":[]},{"level":3,"title":"Input (binary, l4 endpoint)","slug":"input-binary-l4-endpoint","link":"#input-binary-l4-endpoint","children":[]},{"level":3,"title":"Switch (l11 endpoint)","slug":"switch-l11-endpoint","link":"#switch-l11-endpoint","children":[]},{"level":3,"title":"Switch (l12 endpoint)","slug":"switch-l12-endpoint","link":"#switch-l12-endpoint","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1730574193000},"filePathRelative":"devices/IOMZB-110.md"}')}}]);