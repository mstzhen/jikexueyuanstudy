-- phpMyAdmin SQL Dump
-- version phpStudy 2014
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2016 年 04 月 17 日 10:30
-- 服务器版本: 5.5.40
-- PHP 版本: 5.3.29

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `news`
--

-- --------------------------------------------------------

--
-- 表的结构 `newslist`
--

CREATE TABLE IF NOT EXISTS `newslist` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '新闻ID',
  `cat_id` int(11) unsigned NOT NULL COMMENT '分类id',
  `title` varchar(100) NOT NULL COMMENT '新闻标题',
  `introduction` text NOT NULL COMMENT '新闻简介',
  `created` text NOT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=41 ;

--
-- 转存表中的数据 `newslist`
--

INSERT INTO `newslist` (`id`, `cat_id`, `title`, `introduction`, `created`) VALUES
(18, 11, '二孩政策正式落地 算算北京养个娃要花多少钱', '一般的孩子考上大学后，四年学费2万元左右；杂费、生活费一个月1000元左右，加上来回家和旅游的...', '2分钟前'),
(19, 11, '一线楼市“调控风”来袭：北京广州或有调整', '一年半时间内，二套房首付比例从7成到4成再到5成，一线城市经历了从加杠杆到降杠杆的过程。', '2分钟前'),
(20, 11, '八大主力牵头涉及九千商户 京大红门南下永清建服装城', '服装城不只面向大红门八大主力市场承接疏解商户，而是面向整个北京地区的服装批发市场，以大红门和动...', '2分钟前'),
(21, 11, '北京五环内住宅库存锐减 房价持续走高', '从市场比例看，北京五环外成交占比已经超过90%', '2分钟前'),
(22, 12, '北京市10万余家单位降低工伤保险费率', '市社保中心表示，重新核定费率需用人单位持社保登记证、营业执照复印件，到所属辖区社保经代办机构办...', '2分钟前'),
(23, 12, '博士股东卷5000万公款潜逃 持3个身份8个手机号', '湖南某置业公司到岳麓公安分局报案称：公司股东吕某私自侵占公司5000多万元公款后下落不明。', '2分钟前'),
(24, 12, '北京5个区首通过国家创新区核查', '国务院教育督导委员会办公室建立中小学校责任督学挂牌督导制度以来，目前全国99%的中小学校实现挂...', '2分钟前'),
(25, 12, '北京去年拆除722座非法墓穴 整治殡葬行业秩序', '执法人员去年纠正殡葬违法行为88起，没收封建迷信用品285公斤，有效整治了殡葬行业秩序。', '2分钟前'),
(26, 13, '北京严查房产中介“十宗罪”：禁止哄抬房价', '本市开展房地产经纪机构专项执法检查，重点检查擅自发布房源信息、违规群租、哄抬房价、阴阳合同、经...', '2分钟前'),
(27, 13, '这家“傲娇”超市：年挣15亿，未来还要收门票！', '电商的发展让很多人对实体店的未来充满疑虑，实体书店、服装店、超市……已经没落了吗。', '2分钟前'),
(28, 13, '联想手机战略为何落后？看看ZUK金秀贤手机就知道了', '联想手机战略为何落后？看看ZUK金秀贤手机就知道了 来自星星的都教授来中国帮着联想卖手机来了。', '2分钟前'),
(29, 13, '互联网电视密集发布，老牌巨头自信来自何处？', '从近日密集的新品发布会能够感觉到，电视行业大有“狼烟起”的势头。', '2分钟前'),
(30, 14, '人工智能写的微型小说参评“日本星新一文学奖”', '星新一是日本现代科幻小说作家，被誉为“日本微型小说鼻祖，其中《名侦探柯南》中的“工藤新一”之名...', '2分钟前'),
(31, 14, 'YOTO Video:动作捕捉公司Sixense STEM“VR攻城”', '上周在2016GDC还展示了一款跨平台多人在线游戏SiegeVR。', '2分钟前'),
(32, 14, '巴菲特如何做到安心长期持股', '我们必须在买入前做好充足的投资分析，来确定这是一只值得我们长期持有的好股票。', '2分钟前'),
(33, 14, '二孩政策正式落地 算算北京养个娃要花多少钱', '二孩政策正式落地 算算北京养个娃要花多少钱.....', '2分钟前'),
(34, 15, '八大主力牵头涉及九千商户 京大红门南下永清建服装城', '服装城不只面向大红门八大主力市场承接疏解商户，而是面向整个北京地区的服装批发市场，以大红门和动...', '2分钟前'),
(35, 15, '逃犯逛KTV 醉了 打架吃亏报警 抓了', '男子韩某醉酒后，认为KTV顾客挑衅便跟对方打架，吃亏后主动报警求助。', '2分钟前'),
(36, 15, '酒店里私自养猴，究竟想干啥？', '两只活猴为什么会在饭店内，民警立即赶到现场进行了调查。', '2分钟前'),
(37, 15, '天津大学成立刑事法律研究中心', '当天的研究会分为“留守儿童、流动儿童面临的社会问题”与“未成年人司法问题”两个主题，与会专家', '2分钟前'),
(38, 16, '联想手机战略为何落后？看看ZUK金秀贤手机就知道了', '联想手机战略为何落后？看看ZUK金秀贤手机就知道了........', '2分钟前'),
(39, 16, '人工智能写的微型小说参评“日本星新一文学奖”', '星新一是日本现代科幻小说作家，被誉为“日本微型小说鼻祖，其中《名侦探柯南》中的“工藤新一”之名...', '2分钟前'),
(40, 16, 'Helio X25加持，联发科能否赢得高端市场？', '联发科一直希望与美国高通在高端智能手机芯片市场一较长短，为此推出了新的“曦力”品牌，并于去年', '2分钟前');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
