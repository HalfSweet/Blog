import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o,c as t,f as r,a as e,b as i,d as l,e as d}from"./app-5e7d6d74.js";const c="/assets/Screenshot1-4b1ce3b0.png",u="/assets/Screenshot2-e5f3d655.png",m="/assets/Screenshot6-181e90ea.png",v="/assets/Screenshot3-8a84a066.png",b="/assets/Screenshot4-5da876ef.png",p="/assets/Screenshot5-eb61a1ec.png",f={},h=e("p",null,"最近大家应该都玩过novelAI了，出来的图片质量都非常棒，但是b站大佬给的配置只是打包了的bat文件，但是这显然不符合我们的折腾精神，于是我们来尝试使用conda来进行纯手工配置。",-1),_=e("h2",{id:"前置条件",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#前置条件","aria-hidden":"true"},"#"),i(" 前置条件")],-1),g=e("ul",null,[e("li",null,"git"),e("li",null,"conda（在win上使用miniconda或者anconda均可，建议使用miniconda，体积更小）"),e("li",null,"nvida的cuda驱动"),e("li",null,"合适的磁力链接下载软件"),e("li",null,"适当的访问外网方式，您可能需要配置命令行、conda等工具，以及您可能需要对pip/conda等工具进行换源，在此不多赘述。")],-1),w=e("h2",{id:"安装stable-diffusion-webui",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装stable-diffusion-webui","aria-hidden":"true"},"#"),i(" 安装stable-diffusion-webui")],-1),k={href:"https://github.com/AUTOMATIC1111/stable-diffusion-webui",target:"_blank",rel:"noopener noreferrer"},y=d(`<p>这里我们采用git clone的方式来进行下载，同时也更方便我们后期的升级等操作。在命令行中输入</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>等待自动克隆完毕，在此期间可以进行下一步或者做你喜欢的事。</p><h2 id="下载泄露版的novelai模型" tabindex="-1"><a class="header-anchor" href="#下载泄露版的novelai模型" aria-hidden="true">#</a> 下载泄露版的novelAI模型</h2><p>您可以选择合适的磁力链接下载工具，下载如下的文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>magnet:?xt=urn:btih:LPPEILNIMJS3M4FD4XVDCY5PVUWG7DWM&amp;dn=novelaileak&amp;xl=55901742348
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意，您不需要下载全部的文件，您只需要下载<code>stableckpt</code>文件夹中的以<code>-final-pruned</code>后缀或者<code>-latest</code>后缀的文件即可。以下是各个后缀的解释：</p><ul><li>animefull 完整版</li><li>animesfw 全年龄版（去除掉了某些奇怪的东西）</li><li>-latest 最新的版本，也就是常说的7G版，请注意，这可能需要消耗更多的显存</li><li>-final-pruned 最终裁剪版，也就是常说的4G版</li><li>-prevgood 之前较好的版本，一般不使用</li></ul>`,8),x={href:"https://www.bilibili.com/read/cv19099066",target:"_blank",rel:"noopener noreferrer"},q=d(`<p>在下载的过程中，您可以选择等待或者是做您喜欢的事。</p><h2 id="创建一个conda虚拟环境" tabindex="-1"><a class="header-anchor" href="#创建一个conda虚拟环境" aria-hidden="true">#</a> 创建一个conda虚拟环境</h2><p>运行如下命令来创建一个conda的虚拟环境，注意python版本需要为3.10.6以上</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>conda create -n name python=3.10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>-n</code>参数后面的<code>name</code>替换为为您想创建的虚拟环境的名称，在这里我使用了<code>novelAI</code>，之后的命令中将使用这个名称，如果您使用了别的名称，请注意自行替换。</p><p>激活环境，使用</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>conda activate novelAI
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者直接使用</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>activate novelAI
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="安装pytorch" tabindex="-1"><a class="header-anchor" href="#安装pytorch" aria-hidden="true">#</a> 安装PyTorch</h2><p>无需手动安装，接下来的安装依赖的环节会自动安装合适版本的PyTorch，手动安装可能会出现版本不兼容问题。</p><p><s>在这里，我们安装CUDA版的Pytorch，以便于获得更快的出图速度。如果您没有安装CUDA的驱动，请您自行安装以进行下一步。</s></p>`,12),A={href:"https://pytorch.org/get-started/previous-versions/",target:"_blank",rel:"noopener noreferrer"},I=e("code",null,"nvcc -v",-1),D=d(`<p><s>conda install pytorch<mark>1.12.1 torchvision</mark>0.13.1 torchaudio==0.12.1 cudatoolkit=11.6 -c pytorch -c conda-forge</s></p><p><s>等待PyTorch安装完成，并查看stable-diffusion-webui是否已经完成克隆。如果没有，请坐和放宽，等待克隆完成进行下一步的依赖安装操作。</s></p><h2 id="安装stable-diffusion-webui依赖" tabindex="-1"><a class="header-anchor" href="#安装stable-diffusion-webui依赖" aria-hidden="true">#</a> 安装stable-diffusion-webui依赖</h2><p>切换到克隆好的stable-diffusion-webui文件夹下</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>cd stable-diffusion-webui
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行命令</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>pip install -r requirements.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>等待自动安装相关的依赖。在这段时间您可以将刚才下载好的模型的<code>ckpt</code>和<code>yaml</code>文件移到<code>stable-diffusion-webui\\models\\Stable-diffusion</code>文件夹下，并将同一个模型的<code>ckpt</code>和<code>yaml</code>文件修改为相同的名字。</p><p>等待pip命令执行完毕之后，运行命令</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>python launch.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将会自动安装模型中所需的别的依赖。这段过程可能有些漫长，但是请您耐心等待。</p><p>等待命令执行完毕，见到如下输出即代表配置完成<br><img src="`+c+'" alt="" loading="lazy"><br> 按照提示打开<code>http://127.0.0.1:7860</code>，即可使用。<br><img src="'+u+'" alt="" loading="lazy"></p><h2 id="安装本地化-可选" tabindex="-1"><a class="header-anchor" href="#安装本地化-可选" aria-hidden="true">#</a> 安装本地化（可选）</h2><p>进入网页的Extensions选项，选择其中的Available选项卡，取消掉loclization的勾，然后再点击Load from的橙色按钮。<br><img src="'+m+`" alt="" loading="lazy"><br> 在接下来的选项中找到zh_CN Localization，点击右边的Install按钮进行安装。安装完成之后重启服务，然后在网页的Setting选项中点击show all page，然后搜素找到Localization选项，里面选择zh_CN，最后然后按一下页面顶部的橙色按钮Apply Setting保存设置，再按Reload UI。</p><h2 id="faq" tabindex="-1"><a class="header-anchor" href="#faq" aria-hidden="true">#</a> FAQ</h2><h3 id="报错-the-file-is-most-likely-corrupted" tabindex="-1"><a class="header-anchor" href="#报错-the-file-is-most-likely-corrupted" aria-hidden="true">#</a> 报错&quot;!!!! The file is most likely corrupted !!!!&quot;</h3><p>完整报错日志如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Python 3.10.6 | packaged by conda-forge | (main, Oct 24 2022, 16:02:16) [MSC v.1916 64 bit (AMD64)]
Commit hash: 5f4fa942b8ec3ed3b15a352903489d6f9e6eb46e
Installing requirements for Web UI
Launching Web UI with arguments:
No module &#39;xformers&#39;. Proceeding without it.
Checkpoint model.ckpt [e6e8e1fc] not found; loading fallback model.ckpt [925997e9]
LatentDiffusion: Running in eps-prediction mode
DiffusionWrapper has 859.52 M params.
Loading weights [925997e9] from D:\\novelAI\\stable-diffusion-webui\\models\\Stable-diffusion\\model.ckpt
Error verifying pickled file from D:\\novelAI\\stable-diffusion-webui\\models\\Stable-diffusion\\model.ckpt:
Traceback (most recent call last):
  File &quot;D:\\novelAI\\stable-diffusion-webui\\modules\\safe.py&quot;, line 81, in check_pt
    with zipfile.ZipFile(filename) as z:
  File &quot;C:\\Users\\HalfSweet\\.conda\\envs\\novelAI\\lib\\zipfile.py&quot;, line 1267, in __init__
    self._RealGetContents()
  File &quot;C:\\Users\\HalfSweet\\.conda\\envs\\novelAI\\lib\\zipfile.py&quot;, line 1334, in _RealGetContents
    raise BadZipFile(&quot;File is not a zip file&quot;)
zipfile.BadZipFile: File is not a zip file

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File &quot;D:\\novelAI\\stable-diffusion-webui\\modules\\safe.py&quot;, line 135, in load_with_extra
    check_pt(filename, extra_handler)
  File &quot;D:\\novelAI\\stable-diffusion-webui\\modules\\safe.py&quot;, line 102, in check_pt
    unpickler.load()
_pickle.UnpicklingError: persistent IDs in protocol 0 must be ASCII strings

-----&gt; !!!! The file is most likely corrupted !!!! &lt;-----
You can skip this check with --disable-safe-unpickle commandline argument, but that is not going to help you.


loading stable diffusion model: AttributeError
Traceback (most recent call last):
  File &quot;D:\\novelAI\\stable-diffusion-webui\\webui.py&quot;, line 66, in initialize
    modules.sd_models.load_model()
  File &quot;D:\\novelAI\\stable-diffusion-webui\\modules\\sd_models.py&quot;, line 321, in load_model
    load_model_weights(sd_model, checkpoint_info)
  File &quot;D:\\novelAI\\stable-diffusion-webui\\modules\\sd_models.py&quot;, line 202, in load_model_weights
    sd = read_state_dict(checkpoint_file)
  File &quot;D:\\novelAI\\stable-diffusion-webui\\modules\\sd_models.py&quot;, line 184, in read_state_dict
    sd = get_state_dict_from_checkpoint(pl_sd)
  File &quot;D:\\novelAI\\stable-diffusion-webui\\modules\\sd_models.py&quot;, line 155, in get_state_dict_from_checkpoint
    pl_sd = pl_sd.pop(&quot;state_dict&quot;, pl_sd)
AttributeError: &#39;NoneType&#39; object has no attribute &#39;pop&#39;


Stable diffusion model failed to load, exiting
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一些模型可以用，但是<code>animefull-final-pruned</code>模型没法用，加上<code>--disable-safe-unpickle</code>参数后报错如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Python 3.10.6 | packaged by conda-forge | (main, Oct 24 2022, 16:02:16) [MSC v.1916 64 bit (AMD64)]
Commit hash: 5f4fa942b8ec3ed3b15a352903489d6f9e6eb46e
Installing requirements for Web UI
Launching Web UI with arguments: --disable-safe-unpickle
No module &#39;xformers&#39;. Proceeding without it.
Checkpoint model.ckpt [e6e8e1fc] not found; loading fallback model.ckpt [925997e9]
LatentDiffusion: Running in eps-prediction mode
DiffusionWrapper has 859.52 M params.
Loading weights [925997e9] from D:\\novelAI\\stable-diffusion-webui\\models\\Stable-diffusion\\model.ckpt
loading stable diffusion model: RuntimeError
Traceback (most recent call last):
  File &quot;D:\\novelAI\\stable-diffusion-webui\\webui.py&quot;, line 66, in initialize
    modules.sd_models.load_model()
  File &quot;D:\\novelAI\\stable-diffusion-webui\\modules\\sd_models.py&quot;, line 321, in load_model
    load_model_weights(sd_model, checkpoint_info)
  File &quot;D:\\novelAI\\stable-diffusion-webui\\modules\\sd_models.py&quot;, line 202, in load_model_weights
    sd = read_state_dict(checkpoint_file)
  File &quot;D:\\novelAI\\stable-diffusion-webui\\modules\\sd_models.py&quot;, line 179, in read_state_dict
    pl_sd = torch.load(checkpoint_file, map_location=map_location or shared.weight_load_location)
  File &quot;D:\\novelAI\\stable-diffusion-webui\\modules\\safe.py&quot;, line 106, in load
    return load_with_extra(filename, extra_handler=global_extra_handler, *args, **kwargs)
  File &quot;D:\\novelAI\\stable-diffusion-webui\\modules\\safe.py&quot;, line 151, in load_with_extra
    return unsafe_torch_load(filename, *args, **kwargs)
  File &quot;C:\\Users\\HalfSweet\\.conda\\envs\\novelAI\\lib\\site-packages\\torch\\serialization.py&quot;, line 705, in load
    with _open_zipfile_reader(opened_file) as opened_zipfile:
  File &quot;C:\\Users\\HalfSweet\\.conda\\envs\\novelAI\\lib\\site-packages\\torch\\serialization.py&quot;, line 242, in __init__
    super(_open_zipfile_reader, self).__init__(torch._C.PyTorchFileReader(name_or_buffer))
RuntimeError: PytorchStreamReader failed reading zip archive: failed finding central directory


Stable diffusion model failed to load, exiting
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),C={href:"https://www.bilibili.com/read/cv19182425",target:"_blank",rel:"noopener noreferrer"},z=e("br",null,null,-1),F=e("img",{src:v,alt:"",loading:"lazy"},null,-1),S=e("br",null,null,-1),T=e("img",{src:b,alt:"",loading:"lazy"},null,-1),U=e("p",null,"经过重新检查文件完整性的操作，问题修复。",-1),P=e("figure",null,[e("img",{src:p,alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1);function L(E,M){const n=a("ExternalLinkIcon");return o(),t("div",null,[h,r(" more "),_,g,w,e("p",null,[e("a",k,[i("stable-diffusion-webui"),l(n)]),i("是一个基于用于稳定扩散的 Gradio 库的浏览器界面，作用是将泄露出来的novelAI模型以一个可视化比较好的方式进行训练与导出。")]),y,e("p",null,[i("请选择一个或者多个您喜欢的模型下载，如果您对不同的模型区别有疑问，可以参考这个"),e("a",x,[i("链接"),l(n)]),i("。")]),q,e("p",null,[e("s",null,[i("前往"),e("a",A,[i("PyTorch官网"),l(n)]),i("，查找适合您电脑CUDA驱动的版本（您可以通过命令"),I,i("查看当前电脑的CUDA驱动版本，并安装低于CUDA版本的PyTorch）。在这里，我们安装1.12.1版本，使用CUDA 11.6的PyTorch（使用别的版本请自行替换命令）。")])]),D,e("p",null,[i("经过"),e("a",C,[i("b站一位大佬"),l(n)]),i("发的Hash对照来看，发现是使用比特彗星下载的文件的Hash不对，但是很神奇的是stable-diffusion-webui的计算的8位正确。"),z,F,S,T]),U,P])}const W=s(f,[["render",L],["__file","index.html.vue"]]);export{W as default};