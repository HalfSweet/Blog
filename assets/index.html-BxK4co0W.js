import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,b as i,e as t,d as p,f as r,a as o,r as s,o as h}from"./app-DI-ShbSQ.js";const d={};function c(m,e){const a=s("RouteLink");return h(),l("div",null,[i("p",null,[e[1]||(e[1]=t("在上文 ")),p(a,{to:"/posts/%E4%B8%BA%E4%BB%80%E4%B9%88%E6%88%91%E5%AF%B9%E7%AC%AC%E4%B8%89%E4%BB%A3%E9%83%8A%E7%8B%BC%E5%A4%B1%E6%9C%9B.html"},{default:r(()=>e[0]||(e[0]=[t("为什么我对第三代郊狼失望")])),_:1}),e[2]||(e[2]=t(" 一文中，我对于第三代郊狼的硬件部分进行了一些初步分析，因为没有详细的一些资料，因此在一些地方可能存在一些错误。在昨晚（2024-03-19）郊狼作者找到我，与我群群友进行了一番友好的长时间地交流，也解答了我对设计上的一些疑问。在本文中我们会逐步分析前文中提到的问题。"))]),e[3]||(e[3]=o('<h2 id="外观设计" tabindex="-1"><a class="header-anchor" href="#外观设计"><span>外观设计</span></a></h2><p>在外观上，我质疑这个和二代的设计区别不大，有炒冷饭之嫌。</p><p>但是按照原作者的说法，依旧沿用这个外观上考虑到第一比较经典，很多用户已经习惯了这样的设计，因此不好变动。第二就是看起来没什么变化，实际上的话还是有一些小细节进行了变动，比如说在Type-C口处加入了橡胶垫的设计，这样有效避免了外壳与Type-C的外壳地直接接触，带来的最明显的变化就是对于某些可能漏电的充电器来说，悬浮地显然会更加安全，也不会被充电器给电到。</p><p>并且根据作者描述，在后期可能会出一个全密封防水的郊狼版本，未来可期（</p><h2 id="电源拓扑" tabindex="-1"><a class="header-anchor" href="#电源拓扑"><span>电源拓扑</span></a></h2><p>在前文中，我误以为第三代和第二代一样，还是比较朴素的纯开环的boost拓扑进行升压。但是作者所述这个部分恰恰是提升最大的。</p><p>首先在升压部分，电感由原来的 1mH 更换为了 330uH ，理论上来说这有助于采用更低DCR的电感，这样在变换过程中的能量耗散也就降低了。</p><p>然后3.0中也加入了一个电压环的反馈电路，据作者所述这个就是LM393比较器的其中一个功能，用来保证输出的电压保持在一定的范围内，如果超过设定的电压值的情况下将会自动反馈到输出端降低电压。</p><p>另外3.0中也存在一个电流环，虽然可能较为粗糙，但是同样也可以实现输出端电流将被限制在某个值内，这同样有助于减少无谓的功率耗散，同时也能大大增强安全性，避免出现短路导致整个电路挂掉的情况。</p><p>因此相比2.0的硬件来说，3.0的硬件上在电源拓扑方面也可以将其称之为是一套完整的闭环控制系统。相比于2.0的纯开环来说，各方面性能都会更优秀，并且相较于其他的需要MCU控制的软闭环电路来说，也会更加稳定，实时性更好。</p><p>另外其实值得注意的一点就是，3.0中的高压母线卸放电路从2.0中的被动改为了主动式，只有在需要的时候才会进行卸放，这样也有助于减少无谓的功率耗散。并且据作者所述，这一点才是真正的相较于2.0工作温度较高的问题的最有效的解决方案。</p><h2 id="主控方案" tabindex="-1"><a class="header-anchor" href="#主控方案"><span>主控方案</span></a></h2><p>据作者所诉，3.0的方案选择北欧的原因还是考虑到团队的熟悉程度以及性能方面的取舍。用22年的芯片确实是屯多了（逃</p><p>但是绝不存在偷工减料！并且软件方面也进行了较大层面上的重构，也不存在炒冷饭的现象。</p><h2 id="磨标芯片" tabindex="-1"><a class="header-anchor" href="#磨标芯片"><span>磨标芯片</span></a></h2><p>这个确实是为了防抄袭，也确实是主动进行的磨标，但是作者说这个意义似乎不大，并且也已经偷偷告诉我芯片的型号了（逃</p><h2 id="电源电压的限制" tabindex="-1"><a class="header-anchor" href="#电源电压的限制"><span>电源电压的限制</span></a></h2><p>在2.0中，因为是采用的开环boost方案，因此最大的电压采用了直接并联电阻和TVS的双重控制，因为无法控制最终输出的功率，因此能输出的电压也较高。</p><p>但是在3.0中，据作者所述，因为加入了闭环控制和主动卸放，因此不需要做，也没有必要引入那么高的电源电压。所以91V的TVS仅仅是用于最后一道防线失效的情况下的最终保护，整体的余量还非常丰富。</p><h2 id="失效保护" tabindex="-1"><a class="header-anchor" href="#失效保护"><span>失效保护</span></a></h2><p>在其他保护措施失效，TVS进行保护的时候，其中一个光耦也被用来作为TVS触发的检测，在这种情况下主控将会立即关闭整个电源，以保护整个电路。</p><h2 id="冗余-检测" tabindex="-1"><a class="header-anchor" href="#冗余-检测"><span>“冗余”检测</span></a></h2><p>在3.0中，保留了前代的LED输出指示灯，并且负载检测改成了两颗对向光耦进行检测，这样在结构上说完全对称的，避免了前代中单边检测的不均匀压降导致正负压可能会存在差异的情况。</p><h2 id="按钮的按键选型" tabindex="-1"><a class="header-anchor" href="#按钮的按键选型"><span>按钮的按键选型</span></a></h2><p>根据作者所述，选择鼠标微动是因为在结构方面的限制更少，这点和推测一致。至于噪音问题，作者说可以考虑后期增加更多的选项（这也是play的一部分</p><h2 id="按钮的触发力度" tabindex="-1"><a class="header-anchor" href="#按钮的触发力度"><span>按钮的触发力度</span></a></h2><p>这个在结构上预留了一个弹簧，因此是可以做到不同的触发力度，后期会考虑增加更多版本。</p><h2 id="imu的选型" tabindex="-1"><a class="header-anchor" href="#imu的选型"><span>IMU的选型</span></a></h2><p>作者所述三轴的陀螺仪足够满足设计需求。</p><h2 id="外部电压检测" tabindex="-1"><a class="header-anchor" href="#外部电压检测"><span>外部电压检测</span></a></h2><p>这是个赠品，因此凑合能用就行（</p><h2 id="更精确的压力检测" tabindex="-1"><a class="header-anchor" href="#更精确的压力检测"><span>更精确的压力检测</span></a></h2><p>不考虑。</p>',33))])}const u=n(d,[["render",c],["__file","index.html.vue"]]),g=JSON.parse(`{"path":"/posts/clarification_of_why_i_am_disappointed_with_the_third_generation_of_wolf/","title":"对《为什么我对第三代郊狼失望》一文的澄清说明","lang":"zh-CN","frontmatter":{"title":"对《为什么我对第三代郊狼失望》一文的澄清说明","permalink":"/posts/clarification_of_why_i_am_disappointed_with_the_third_generation_of_wolf/","category":["posts"],"tag":["碎碎念","郊狼"],"author":{"name":"HalfSweet","link":"https://github.com/HalfSweet"},"description":"在上文 为什么我对第三代郊狼失望 一文中，我对于第三代郊狼的硬件部分进行了一些初步分析，因为没有详细的一些资料，因此在一些地方可能存在一些错误。在昨晚（2024-03-19）郊狼作者找到我，与我群群友进行了一番友好的长时间地交流，也解答了我对设计上的一些疑问。在本文中我们会逐步分析前文中提到的问题。","head":[["meta",{"property":"og:url","content":"https://halfsweet.cn/posts/clarification_of_why_i_am_disappointed_with_the_third_generation_of_wolf/"}],["meta",{"property":"og:site_name","content":"HalfSweet's Blog"}],["meta",{"property":"og:title","content":"对《为什么我对第三代郊狼失望》一文的澄清说明"}],["meta",{"property":"og:description","content":"在上文 为什么我对第三代郊狼失望 一文中，我对于第三代郊狼的硬件部分进行了一些初步分析，因为没有详细的一些资料，因此在一些地方可能存在一些错误。在昨晚（2024-03-19）郊狼作者找到我，与我群群友进行了一番友好的长时间地交流，也解答了我对设计上的一些疑问。在本文中我们会逐步分析前文中提到的问题。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-23T06:35:02.000Z"}],["meta",{"property":"article:author","content":"HalfSweet"}],["meta",{"property":"article:tag","content":"碎碎念"}],["meta",{"property":"article:tag","content":"郊狼"}],["meta",{"property":"article:modified_time","content":"2024-03-23T06:35:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"对《为什么我对第三代郊狼失望》一文的澄清说明\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-23T06:35:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HalfSweet\\",\\"link\\":\\"https://github.com/HalfSweet\\"}]}"]]},"headers":[{"level":2,"title":"外观设计","slug":"外观设计","link":"#外观设计","children":[]},{"level":2,"title":"电源拓扑","slug":"电源拓扑","link":"#电源拓扑","children":[]},{"level":2,"title":"主控方案","slug":"主控方案","link":"#主控方案","children":[]},{"level":2,"title":"磨标芯片","slug":"磨标芯片","link":"#磨标芯片","children":[]},{"level":2,"title":"电源电压的限制","slug":"电源电压的限制","link":"#电源电压的限制","children":[]},{"level":2,"title":"失效保护","slug":"失效保护","link":"#失效保护","children":[]},{"level":2,"title":"“冗余”检测","slug":"冗余-检测","link":"#冗余-检测","children":[]},{"level":2,"title":"按钮的按键选型","slug":"按钮的按键选型","link":"#按钮的按键选型","children":[]},{"level":2,"title":"按钮的触发力度","slug":"按钮的触发力度","link":"#按钮的触发力度","children":[]},{"level":2,"title":"IMU的选型","slug":"imu的选型","link":"#imu的选型","children":[]},{"level":2,"title":"外部电压检测","slug":"外部电压检测","link":"#外部电压检测","children":[]},{"level":2,"title":"更精确的压力检测","slug":"更精确的压力检测","link":"#更精确的压力检测","children":[]}],"git":{"createdTime":1710914609000,"updatedTime":1711175702000,"contributors":[{"name":"HalfSweet","username":"HalfSweet","email":"halfsweet@halfsweet.cn","commits":1,"url":"https://github.com/HalfSweet"},{"name":"HalfSweet","username":"HalfSweet","email":"HalfSweet@HalfSweet.cn","commits":1,"url":"https://github.com/HalfSweet"}]},"readingTime":{"minutes":4.96,"words":1487},"filePathRelative":"posts/对《为什么我对第三代郊狼失望》一文的澄清说明.md","localizedDate":"2024年3月20日","excerpt":"<p>在上文 <a href=\\"/posts/%E4%B8%BA%E4%BB%80%E4%B9%88%E6%88%91%E5%AF%B9%E7%AC%AC%E4%B8%89%E4%BB%A3%E9%83%8A%E7%8B%BC%E5%A4%B1%E6%9C%9B.html\\" target=\\"_blank\\">为什么我对第三代郊狼失望</a> 一文中，我对于第三代郊狼的硬件部分进行了一些初步分析，因为没有详细的一些资料，因此在一些地方可能存在一些错误。在昨晚（2024-03-19）郊狼作者找到我，与我群群友进行了一番友好的长时间地交流，也解答了我对设计上的一些疑问。在本文中我们会逐步分析前文中提到的问题。</p>\\n","autoDesc":true}`);export{u as comp,g as data};