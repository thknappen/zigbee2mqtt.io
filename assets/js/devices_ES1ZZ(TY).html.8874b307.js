"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[22479],{80495:(e,i,t)=>{t.r(i),t.d(i,{comp:()=>o,data:()=>a});var n=t(24691);const c={},o=(0,t(89260).A)(c,[["render",function(e,i){const t=(0,n.g2)("RouteLink");return(0,n.uX)(),(0,n.CE)("div",null,[i[8]||(i[8]=(0,n.Lk)("h1",{id:"linptech-es1zz-ty",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#linptech-es1zz-ty"},[(0,n.Lk)("span",null,"Linptech ES1ZZ(TY)")])],-1)),(0,n.Lk)("table",null,[i[6]||(i[6]=(0,n.Lk)("thead",null,[(0,n.Lk)("tr",null,[(0,n.Lk)("th"),(0,n.Lk)("th")])],-1)),(0,n.Lk)("tbody",null,[i[2]||(i[2]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Model"),(0,n.Lk)("td",null,"ES1ZZ(TY)")],-1)),(0,n.Lk)("tr",null,[i[1]||(i[1]=(0,n.Lk)("td",null,"Vendor",-1)),(0,n.Lk)("td",null,[(0,n.bF)(t,{to:"/supported-devices/#v=Linptech"},{default:(0,n.k6)((()=>i[0]||(i[0]=[(0,n.eW)("Linptech")]))),_:1})])]),i[3]||(i[3]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Description"),(0,n.Lk)("td",null,"mmWave Presence sensor")],-1)),i[4]||(i[4]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Exposes"),(0,n.Lk)("td",null,"occupancy, illuminance, target_distance, motion_detection_distance, presence_keep_time, motion_detection_sensitivity, static_detection_sensitivity, fading_time, led_indicator, linkquality")],-1)),i[5]||(i[5]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Picture"),(0,n.Lk)("td",null,[(0,n.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ES1ZZ(TY).png",alt:"Linptech ES1ZZ(TY)"})])],-1))])]),i[9]||(i[9]=(0,n.Lk)("h2",{id:"options",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#options"},[(0,n.Lk)("span",null,"Options")])],-1)),(0,n.Lk)("p",null,[(0,n.Lk)("em",null,[(0,n.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.k6)((()=>i[7]||(i[7]=[(0,n.eW)("How to use device type specific configuration")]))),_:1})])]),i[10]||(i[10]=(0,n.Fv)('<ul><li><code>illuminance_calibration</code>: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.</li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="occupancy-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-binary"><span>Occupancy (binary)</span></a></h3><p>Presence state. Value can be found in the published state on the <code>occupancy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> occupancy is ON, if <code>false</code> OFF.</p><h3 id="illuminance-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-numeric"><span>Illuminance (numeric)</span></a></h3><p>Raw measured illuminance. Value can be found in the published state on the <code>illuminance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id="target-distance-numeric" tabindex="-1"><a class="header-anchor" href="#target-distance-numeric"><span>Target distance (numeric)</span></a></h3><p>Distance to target. Value can be found in the published state on the <code>target_distance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>cm</code>.</p><h3 id="motion-detection-distance-numeric" tabindex="-1"><a class="header-anchor" href="#motion-detection-distance-numeric"><span>Motion detection distance (numeric)</span></a></h3><p>Motion detection distance. Value can be found in the published state on the <code>motion_detection_distance</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;motion_detection_distance&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>600</code>. The unit of this value is <code>cm</code>.</p><h3 id="presence-keep-time-numeric" tabindex="-1"><a class="header-anchor" href="#presence-keep-time-numeric"><span>Presence keep time (numeric)</span></a></h3><p>Presence keep time. Value can be found in the published state on the <code>presence_keep_time</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>min</code>.</p><h3 id="motion-detection-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#motion-detection-sensitivity-numeric"><span>Motion detection sensitivity (numeric)</span></a></h3><p>Motion detection sensitivity. Value can be found in the published state on the <code>motion_detection_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;motion_detection_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>5</code>.</p><h3 id="static-detection-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#static-detection-sensitivity-numeric"><span>Static detection sensitivity (numeric)</span></a></h3><p>Static detection sensitivity. Value can be found in the published state on the <code>static_detection_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;static_detection_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>5</code>.</p><h3 id="fading-time-numeric" tabindex="-1"><a class="header-anchor" href="#fading-time-numeric"><span>Fading time (numeric)</span></a></h3><p>Time after which the device will check again for presence. Value can be found in the published state on the <code>fading_time</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;fading_time&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>10000</code>. The unit of this value is <code>s</code>.</p><h3 id="led-indicator-binary" tabindex="-1"><a class="header-anchor" href="#led-indicator-binary"><span>Led indicator (binary)</span></a></h3><p>LED Presence Indicator. Value can be found in the published state on the <code>led_indicator</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;led_indicator&quot;: NEW_VALUE}</code>. If value equals <code>true</code> led indicator is ON, if <code>false</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',22))])}]]),a=JSON.parse('{"path":"/devices/ES1ZZ(TY).html","title":"Linptech ES1ZZ(TY) control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Linptech ES1ZZ(TY) control via MQTT","description":"Integrate your Linptech ES1ZZ(TY) via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-11-01T18:54:40.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Occupancy (binary)","slug":"occupancy-binary","link":"#occupancy-binary","children":[]},{"level":3,"title":"Illuminance (numeric)","slug":"illuminance-numeric","link":"#illuminance-numeric","children":[]},{"level":3,"title":"Target distance (numeric)","slug":"target-distance-numeric","link":"#target-distance-numeric","children":[]},{"level":3,"title":"Motion detection distance (numeric)","slug":"motion-detection-distance-numeric","link":"#motion-detection-distance-numeric","children":[]},{"level":3,"title":"Presence keep time (numeric)","slug":"presence-keep-time-numeric","link":"#presence-keep-time-numeric","children":[]},{"level":3,"title":"Motion detection sensitivity (numeric)","slug":"motion-detection-sensitivity-numeric","link":"#motion-detection-sensitivity-numeric","children":[]},{"level":3,"title":"Static detection sensitivity (numeric)","slug":"static-detection-sensitivity-numeric","link":"#static-detection-sensitivity-numeric","children":[]},{"level":3,"title":"Fading time (numeric)","slug":"fading-time-numeric","link":"#fading-time-numeric","children":[]},{"level":3,"title":"Led indicator (binary)","slug":"led-indicator-binary","link":"#led-indicator-binary","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1730574193000},"filePathRelative":"devices/ES1ZZ(TY).md"}')}}]);