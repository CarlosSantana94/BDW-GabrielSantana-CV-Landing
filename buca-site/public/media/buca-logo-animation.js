/*!
 * BUCA DIGITAL WORKS — Logo animation
 * Web component en JS + SVG puro (sin dependencias).
 *
 *   <script src="buca-logo-animation.js"></script>
 *   <buca-logo-animation theme="carbon" format="wide"></buca-logo-animation>
 *
 * Atributos
 *   theme        carbon | crema                  (default carbon)
 *   format       wide 16:9 | square 1:1 | portrait 9:16 | banner 4:1   (default wide)
 *   variant      logo | icon                     (icon = solo la B)
 *   mode         intro | idle                    (idle = logo armado, solo ondean las velas)
 *   loop         repite la intro con fundido
 *   transparent  sin fondo ni niebla (para superponer sobre otros fondos)
 *   speed        multiplicador de velocidad (1)
 *   autoplay     "false" para controlarlo por JS
 *
 * API: el.play() · el.pause() · el.restart() · el.seek(segundos) · el.duration
 * Evento: "ended" cuando termina la intro.
 * Todo es función pura del tiempo: seek(t) siempre dibuja el mismo cuadro (útil para exportar video).
 */
(() => {
  'use strict';
  if (customElements.get('buca-logo-animation')) return;

  const GEO = {"B":[-24.0,8.0,0.0,8.0,0.0,118.0,-24.0,118.0,-24.0,130.0,0.0,130.0,0.0,240.0,58.0,240.0,58.0,130.0,70.0,130.0,70.0,240.0,71.2,239.6,72.4,239.3,73.6,238.9,74.8,238.5,76.0,238.2,77.2,237.8,78.4,237.5,79.6,237.2,80.8,236.8,82.0,236.5,83.2,236.2,84.4,235.9,85.6,235.6,86.8,235.3,88.0,235.1,89.2,234.8,90.4,234.6,91.6,234.3,92.8,234.1,94.0,233.9,95.2,233.8,96.4,233.6,97.6,233.5,98.8,233.3,100.0,233.2,101.2,233.2,102.4,233.1,103.6,233.0,104.8,233.0,106.0,233.0,107.2,233.0,108.4,233.0,109.6,233.1,110.8,233.2,112.0,233.2,113.2,233.3,114.4,233.5,115.6,233.6,116.8,233.8,118.0,233.9,119.2,234.1,120.4,234.3,121.6,234.6,122.8,234.8,124.0,235.1,125.2,235.3,126.4,235.6,127.6,235.9,128.8,236.2,130.0,236.5,131.2,236.8,132.4,237.2,133.6,237.5,134.8,237.8,136.0,238.2,137.2,238.5,138.4,238.9,139.6,239.3,140.8,239.6,142.0,240.0,146.0,238.1,148.9,236.3,151.5,234.4,154.0,232.5,156.2,230.7,158.4,228.8,160.5,226.9,162.5,225.1,164.3,223.2,166.1,221.3,167.8,219.5,169.5,217.6,171.0,215.7,172.5,213.9,173.8,212.0,175.1,210.1,176.3,208.3,177.4,206.4,178.5,204.5,179.4,202.7,180.3,200.8,181.1,198.9,181.8,197.1,182.3,195.2,182.9,193.3,183.3,191.5,183.6,189.6,183.8,187.7,184.0,185.9,184.0,184.0,184.0,182.1,183.8,180.3,183.6,178.4,183.3,176.5,182.9,174.7,182.3,172.8,181.8,170.9,181.1,169.1,180.3,167.2,179.4,165.3,178.5,163.5,177.4,161.6,176.3,159.7,175.1,157.9,173.8,156.0,172.5,154.1,171.0,152.3,169.5,150.4,167.8,148.5,166.1,146.7,164.3,144.8,162.5,142.9,160.5,141.1,158.4,139.2,156.2,137.3,154.0,135.5,151.5,133.6,148.9,131.7,146.2,130.0,156.0,130.0,156.0,118.0,58.0,118.0,58.0,8.0,70.0,8.0,70.0,104.0,71.0,103.6,71.9,103.3,72.9,102.9,73.9,102.5,74.8,102.2,75.8,101.8,76.8,101.5,77.7,101.2,78.7,100.8,79.7,100.5,80.6,100.2,81.6,99.9,82.6,99.6,83.5,99.3,84.5,99.1,85.5,98.8,86.4,98.6,87.4,98.3,88.4,98.1,89.3,97.9,90.3,97.8,91.3,97.6,92.2,97.5,93.2,97.3,94.2,97.2,95.1,97.2,96.1,97.1,97.1,97.0,98.0,97.0,99.0,97.0,100.0,97.0,100.9,97.0,101.9,97.1,102.9,97.2,103.8,97.2,104.8,97.3,105.8,97.5,106.7,97.6,107.7,97.8,108.7,97.9,109.6,98.1,110.6,98.3,111.6,98.6,112.5,98.8,113.5,99.1,114.5,99.3,115.4,99.6,116.4,99.9,117.4,100.2,118.3,100.5,119.3,100.8,120.3,101.2,121.2,101.5,122.2,101.8,123.2,102.2,124.1,102.5,125.1,102.9,126.1,103.3,127.0,103.6,128.0,104.0,131.2,102.3,133.6,100.7,135.7,99.0,137.7,97.3,139.5,95.7,141.3,94.0,143.0,92.3,144.6,90.7,146.1,89.0,147.5,87.3,148.9,85.7,150.2,84.0,151.5,82.3,152.7,80.7,153.8,79.0,154.8,77.3,155.8,75.7,156.7,74.0,157.5,72.3,158.3,70.7,159.0,69.0,159.6,67.3,160.2,65.7,160.7,64.0,161.1,62.3,161.4,60.7,161.7,59.0,161.9,57.3,162.0,55.7,162.0,54.0,162.0,52.3,161.9,50.7,161.7,49.0,161.4,47.3,161.1,45.7,160.7,44.0,160.2,42.3,159.6,40.7,159.0,39.0,158.3,37.3,157.5,35.7,156.7,34.0,155.8,32.3,154.8,30.7,153.8,29.0,152.7,27.3,151.5,25.7,150.2,24.0,148.9,22.3,147.5,20.7,146.1,19.0,144.6,17.3,143.0,15.7,141.3,14.0,139.5,12.3,137.7,10.7,135.7,9.0,134.4,8.0,142.0,8.0,142.0,-6.0,-24.0,-6.0],"U":[354.0,138.9,354.0,139.9,353.9,140.8,353.8,141.7,353.7,142.7,353.6,143.6,353.4,144.5,353.3,145.4,353.1,146.3,352.9,147.2,352.6,148.1,352.4,149.0,352.1,149.9,351.8,150.8,351.5,151.7,351.1,152.5,350.7,153.4,350.4,154.2,349.9,155.1,349.5,155.9,349.1,156.7,348.6,157.5,348.1,158.3,347.6,159.1,347.1,159.9,346.5,160.6,346.0,161.4,345.4,162.1,344.8,162.8,344.2,163.5,343.5,164.2,342.9,164.9,342.2,165.5,341.5,166.2,340.8,166.8,340.1,167.4,339.4,168.0,338.6,168.5,337.9,169.1,337.1,169.6,336.3,170.1,335.5,170.6,334.7,171.1,333.9,171.5,333.1,171.9,332.2,172.4,331.4,172.7,330.5,173.1,329.7,173.5,328.8,173.8,327.9,174.1,327.0,174.4,326.1,174.6,325.2,174.9,324.3,175.1,323.4,175.3,322.5,175.4,321.6,175.6,320.7,175.7,319.7,175.8,318.8,175.9,317.9,176.0,316.9,176.0,316.0,176.0,315.1,176.0,314.1,176.0,313.2,175.9,312.3,175.8,311.3,175.7,310.4,175.6,309.5,175.4,308.6,175.3,307.7,175.1,306.8,174.9,305.9,174.6,305.0,174.4,304.1,174.1,303.2,173.8,302.3,173.5,301.5,173.1,300.6,172.7,299.8,172.4,298.9,171.9,298.1,171.5,297.3,171.1,296.5,170.6,295.7,170.1,294.9,169.6,294.1,169.1,293.4,168.5,292.6,168.0,291.9,167.4,291.2,166.8,290.5,166.2,289.8,165.5,289.1,164.9,288.5,164.2,287.8,163.5,287.2,162.8,286.6,162.1,286.0,161.4,285.5,160.6,284.9,159.9,284.4,159.1,283.9,158.3,283.4,157.5,282.9,156.7,282.5,155.9,282.1,155.1,281.6,154.2,281.3,153.4,280.9,152.5,280.5,151.7,280.2,150.8,279.9,149.9,279.6,149.0,279.4,148.1,279.1,147.2,278.9,146.3,278.7,145.4,278.6,144.5,278.4,143.6,278.3,142.7,278.2,141.7,278.1,140.8,278.0,139.9,278.0,138.9,278.0,138.0,278.0,0.0,214.0,0.0,214.0,138.0,214.0,140.5,214.1,143.0,214.3,145.5,214.5,148.0,214.8,150.5,215.1,153.0,215.5,155.4,216.0,157.9,216.5,160.3,217.1,162.8,217.7,165.2,218.4,167.6,219.1,170.0,220.0,172.4,220.8,174.7,221.8,177.0,222.8,179.3,223.8,181.6,224.9,183.9,226.0,186.1,227.3,188.3,228.5,190.4,229.8,192.6,231.2,194.7,232.6,196.7,234.1,198.8,235.6,200.8,237.2,202.7,238.8,204.6,240.4,206.5,242.1,208.3,243.9,210.1,245.7,211.9,247.5,213.6,249.4,215.2,251.3,216.8,253.2,218.4,255.2,219.9,257.3,221.4,259.3,222.8,261.4,224.2,263.6,225.5,265.7,226.7,267.9,228.0,270.1,229.1,272.4,230.2,274.7,231.2,277.0,232.2,279.3,233.2,281.6,234.0,284.0,234.9,286.4,235.6,288.8,236.3,291.2,236.9,293.7,237.5,296.1,238.0,298.6,238.5,301.0,238.9,303.5,239.2,306.0,239.5,308.5,239.7,311.0,239.9,313.5,240.0,316.0,240.0,318.5,240.0,321.0,239.9,323.5,239.7,326.0,239.5,328.5,239.2,331.0,238.9,333.4,238.5,335.9,238.0,338.3,237.5,340.8,236.9,343.2,236.3,345.6,235.6,348.0,234.9,350.4,234.0,352.7,233.2,355.0,232.2,357.3,231.2,359.6,230.2,361.9,229.1,364.1,228.0,366.3,226.7,368.4,225.5,370.6,224.2,372.7,222.8,374.7,221.4,376.8,219.9,378.8,218.4,380.7,216.8,382.6,215.2,384.5,213.6,386.3,211.9,388.1,210.1,389.9,208.3,391.6,206.5,393.2,204.6,394.8,202.7,396.4,200.8,397.9,198.8,399.4,196.7,400.8,194.7,402.2,192.6,403.5,190.4,404.7,188.3,406.0,186.1,407.1,183.9,408.2,181.6,409.2,179.3,410.2,177.0,411.2,174.7,412.0,172.4,412.9,170.0,413.6,167.6,414.3,165.2,414.9,162.8,415.5,160.3,416.0,157.9,416.5,155.4,416.9,153.0,417.2,150.5,417.5,148.0,417.7,145.5,417.9,143.0,418.0,140.5,418.0,138.0,418.0,0.0,354.0,0.0,354.0,138.0],"C":[661.4,55.8,659.8,53.3,658.1,50.9,656.4,48.5,654.6,46.2,652.8,43.9,650.9,41.6,648.9,39.4,646.9,37.3,644.9,35.1,642.7,33.1,640.6,31.1,638.4,29.1,636.1,27.2,633.8,25.4,631.5,23.6,629.1,21.9,626.7,20.2,624.2,18.6,621.7,17.1,619.1,15.6,616.6,14.2,614.0,12.8,611.3,11.5,608.6,10.3,605.9,9.1,603.2,8.0,600.4,7.0,597.6,6.1,594.8,5.2,592.0,4.3,589.2,3.6,586.3,2.9,583.4,2.3,580.5,1.8,577.6,1.3,574.7,0.9,571.8,0.6,568.8,0.3,565.9,0.1,562.9,0.0,560.0,0.0,557.1,0.0,554.1,0.1,551.2,0.3,548.2,0.6,545.3,0.9,542.4,1.3,539.5,1.8,536.6,2.3,533.7,2.9,530.8,3.6,528.0,4.3,525.2,5.2,522.4,6.1,519.6,7.0,516.8,8.0,514.1,9.1,511.4,10.3,508.7,11.5,506.0,12.8,503.4,14.2,500.9,15.6,498.3,17.1,495.8,18.6,493.3,20.2,490.9,21.9,488.5,23.6,486.2,25.4,483.9,27.2,481.6,29.1,479.4,31.1,477.3,33.1,475.1,35.1,473.1,37.3,471.1,39.4,469.1,41.6,467.2,43.9,465.4,46.2,463.6,48.5,461.9,50.9,460.2,53.3,458.6,55.8,457.1,58.3,455.6,60.9,454.2,63.4,452.8,66.0,451.5,68.7,450.3,71.4,449.1,74.1,448.0,76.8,447.0,79.6,446.1,82.4,445.2,85.2,444.3,88.0,443.6,90.8,442.9,93.7,442.3,96.6,441.8,99.5,441.3,102.4,440.9,105.3,440.6,108.2,440.3,111.2,440.1,114.1,440.0,117.1,440.0,120.0,440.0,122.9,440.1,125.9,440.3,128.8,440.6,131.8,440.9,134.7,441.3,137.6,441.8,140.5,442.3,143.4,442.9,146.3,443.6,149.2,444.3,152.0,445.2,154.8,446.1,157.6,447.0,160.4,448.0,163.2,449.1,165.9,450.3,168.6,451.5,171.3,452.8,174.0,454.2,176.6,455.6,179.1,457.1,181.7,458.6,184.2,460.2,186.7,461.9,189.1,463.6,191.5,465.4,193.8,467.2,196.1,469.1,198.4,471.1,200.6,473.1,202.7,475.1,204.9,477.3,206.9,479.4,208.9,481.6,210.9,483.9,212.8,486.2,214.6,488.5,216.4,490.9,218.1,493.3,219.8,495.8,221.4,498.3,222.9,500.9,224.4,503.4,225.8,506.0,227.2,508.7,228.5,511.4,229.7,514.1,230.9,516.8,232.0,519.6,233.0,522.4,233.9,525.2,234.8,528.0,235.7,530.8,236.4,533.7,237.1,536.6,237.7,539.5,238.2,542.4,238.7,545.3,239.1,548.2,239.4,551.2,239.7,554.1,239.9,557.1,240.0,560.0,240.0,562.9,240.0,565.9,239.9,568.8,239.7,571.8,239.4,574.7,239.1,577.6,238.7,580.5,238.2,583.4,237.7,586.3,237.1,589.2,236.4,592.0,235.7,594.8,234.8,597.6,233.9,600.4,233.0,603.2,232.0,605.9,230.9,608.6,229.7,611.3,228.5,614.0,227.2,616.6,225.8,619.1,224.4,621.7,222.9,624.2,221.4,626.7,219.8,629.1,218.1,631.5,216.4,633.8,214.6,636.1,212.8,638.4,210.9,640.6,208.9,642.7,206.9,644.9,204.9,646.9,202.7,648.9,200.6,650.9,198.4,652.8,196.1,654.6,193.8,656.4,191.5,658.1,189.1,659.8,186.7,661.4,184.2,662.9,181.7,664.4,179.1,665.7,176.9,609.3,146.5,608.7,147.6,608.0,148.8,607.3,150.0,606.6,151.1,605.8,152.2,605.0,153.4,604.1,154.5,603.3,155.5,602.4,156.6,601.5,157.6,600.6,158.6,599.6,159.6,598.6,160.6,597.6,161.5,596.6,162.4,595.5,163.3,594.5,164.1,593.4,165.0,592.2,165.8,591.1,166.6,590.0,167.3,588.8,168.0,587.6,168.7,586.4,169.4,585.2,170.0,583.9,170.6,582.7,171.2,581.4,171.7,580.2,172.2,578.9,172.7,577.6,173.2,576.3,173.6,574.9,174.0,573.6,174.3,572.3,174.6,570.9,174.9,569.6,175.2,568.2,175.4,566.9,175.6,565.5,175.7,564.1,175.8,562.7,175.9,561.4,176.0,560.0,176.0,558.6,176.0,557.3,175.9,555.9,175.8,554.5,175.7,553.1,175.6,551.8,175.4,550.4,175.2,549.1,174.9,547.7,174.6,546.4,174.3,545.1,174.0,543.7,173.6,542.4,173.2,541.1,172.7,539.8,172.2,538.6,171.7,537.3,171.2,536.1,170.6,534.8,170.0,533.6,169.4,532.4,168.7,531.2,168.0,530.0,167.3,528.9,166.6,527.8,165.8,526.6,165.0,525.5,164.1,524.5,163.3,523.4,162.4,522.4,161.5,521.4,160.6,520.4,159.6,519.4,158.6,518.5,157.6,517.6,156.6,516.7,155.5,515.9,154.5,515.0,153.4,514.2,152.2,513.4,151.1,512.7,150.0,512.0,148.8,511.3,147.6,510.6,146.4,510.0,145.2,509.4,143.9,508.8,142.7,508.3,141.4,507.8,140.2,507.3,138.9,506.8,137.6,506.4,136.3,506.0,134.9,505.7,133.6,505.4,132.3,505.1,130.9,504.8,129.6,504.6,128.2,504.4,126.9,504.3,125.5,504.2,124.1,504.1,122.7,504.0,121.4,504.0,120.0,504.0,118.6,504.1,117.3,504.2,115.9,504.3,114.5,504.4,113.1,504.6,111.8,504.8,110.4,505.1,109.1,505.4,107.7,505.7,106.4,506.0,105.1,506.4,103.7,506.8,102.4,507.3,101.1,507.8,99.8,508.3,98.6,508.8,97.3,509.4,96.1,510.0,94.8,510.6,93.6,511.3,92.4,512.0,91.2,512.7,90.0,513.4,88.9,514.2,87.8,515.0,86.6,515.9,85.5,516.7,84.5,517.6,83.4,518.5,82.4,519.4,81.4,520.4,80.4,521.4,79.4,522.4,78.5,523.4,77.6,524.5,76.7,525.5,75.9,526.6,75.0,527.8,74.2,528.9,73.4,530.0,72.7,531.2,72.0,532.4,71.3,533.6,70.6,534.8,70.0,536.1,69.4,537.3,68.8,538.6,68.3,539.8,67.8,541.1,67.3,542.4,66.8,543.7,66.4,545.1,66.0,546.4,65.7,547.7,65.4,549.1,65.1,550.4,64.8,551.8,64.6,553.1,64.4,554.5,64.3,555.9,64.2,557.3,64.1,558.6,64.0,560.0,64.0,561.4,64.0,562.7,64.1,564.1,64.2,565.5,64.3,566.9,64.4,568.2,64.6,569.6,64.8,570.9,65.1,572.3,65.4,573.6,65.7,574.9,66.0,576.3,66.4,577.6,66.8,578.9,67.3,580.2,67.8,581.4,68.3,582.7,68.8,583.9,69.4,585.2,70.0,586.4,70.6,587.6,71.3,588.8,72.0,590.0,72.7,591.1,73.4,592.2,74.2,593.4,75.0,594.5,75.9,595.5,76.7,596.6,77.6,597.6,78.5,598.6,79.4,599.6,80.4,600.6,81.4,601.5,82.4,602.4,83.4,603.3,84.5,604.1,85.5,605.0,86.6,605.8,87.8,606.6,88.9,607.3,90.0,608.0,91.2,608.7,92.4,609.3,93.5,665.7,63.1,664.4,60.9,662.9,58.3],"A":[[688.0,240.0,784.5,240.0,806.0,196.0,827.5,240.0,924.0,240.0,822.0,0.0,790.0,0.0],[836.0,160.0,776.0,160.0,806.0,96.0]],"tag":[{"c":"D","x":218.34,"d":"M22.81 -11.73Q22.81 -8.13 21.27 -5.47Q19.72 -2.82 16.88 -1.41Q14.04 0 10.27 0H2.55V-23.63H10.27Q14.04 -23.63 16.88 -22.19Q19.72 -20.74 21.27 -18.04Q22.81 -15.33 22.81 -11.73ZM18.84 -11.73Q18.84 -15.84 16.63 -18.16Q14.42 -20.47 10.27 -20.47H6.43V-3.16H10.27Q14.42 -3.16 16.63 -5.41Q18.84 -7.65 18.84 -11.73Z"},{"c":"I","x":259.45,"d":"M6.43 -23.63V0H2.55V-23.63Z"},{"c":"G","x":285.42,"d":"M19.65 -16.83Q18.73 -18.6 17.1 -19.5Q15.47 -20.4 13.33 -20.4Q10.98 -20.4 9.15 -19.35Q7.31 -18.29 6.27 -16.35Q5.24 -14.42 5.24 -11.87Q5.24 -9.32 6.27 -7.36Q7.31 -5.41 9.15 -4.35Q10.98 -3.3 13.33 -3.3Q16.49 -3.3 18.46 -5.07Q20.43 -6.83 20.88 -9.86H12V-12.95H25.02V-9.93Q24.65 -7.17 23.07 -4.86Q21.49 -2.55 18.96 -1.17Q16.42 0.2 13.33 0.2Q10 0.2 7.24 -1.34Q4.49 -2.89 2.87 -5.64Q1.26 -8.4 1.26 -11.87Q1.26 -15.33 2.87 -18.09Q4.49 -20.84 7.26 -22.39Q10.03 -23.94 13.33 -23.94Q17.1 -23.94 20.04 -22.08Q22.98 -20.23 24.31 -16.83Z"},{"c":"I","x":328.7,"d":"M6.43 -23.63V0H2.55V-23.63Z"},{"c":"T","x":354.68,"d":"M17.82 -23.63V-20.47H11.53V0H7.65V-20.47H1.33V-23.63Z"},{"c":"A","x":390.86,"d":"M16.8 -4.83H6.9L5.2 0H1.16L9.62 -23.66H14.11L22.58 0H18.5ZM15.71 -7.99 11.87 -18.97 7.99 -7.99Z"},{"c":"L","x":431.55,"d":"M6.43 -3.13H14.42V0H2.55V-23.63H6.43Z"},{"c":"W","x":489.49,"d":"M33.32 -23.63 26.32 0H21.93L16.97 -17.88L11.7 0L7.34 0.03L0.65 -23.63H4.76L9.66 -4.39L14.96 -23.63H19.31L24.24 -4.49L29.17 -23.63Z"},{"c":"O","x":540.46,"d":"M1.26 -11.87Q1.26 -15.33 2.87 -18.09Q4.49 -20.84 7.26 -22.39Q10.03 -23.94 13.33 -23.94Q16.66 -23.94 19.43 -22.39Q22.2 -20.84 23.8 -18.09Q25.4 -15.33 25.4 -11.87Q25.4 -8.4 23.8 -5.63Q22.2 -2.86 19.43 -1.31Q16.66 0.24 13.33 0.24Q10.03 0.24 7.26 -1.31Q4.49 -2.86 2.87 -5.63Q1.26 -8.4 1.26 -11.87ZM21.42 -11.87Q21.42 -14.48 20.38 -16.46Q19.35 -18.43 17.51 -19.48Q15.67 -20.54 13.33 -20.54Q10.98 -20.54 9.15 -19.48Q7.31 -18.43 6.27 -16.46Q5.24 -14.48 5.24 -11.87Q5.24 -9.25 6.27 -7.26Q7.31 -5.27 9.15 -4.2Q10.98 -3.13 13.33 -3.13Q15.67 -3.13 17.51 -4.2Q19.35 -5.27 20.38 -7.26Q21.42 -9.25 21.42 -11.87Z"},{"c":"R","x":584.11,"d":"M14.82 0 9.38 -9.45H6.43V0H2.55V-23.63H10.71Q13.43 -23.63 15.32 -22.68Q17.2 -21.73 18.14 -20.13Q19.07 -18.53 19.07 -16.56Q19.07 -14.25 17.73 -12.36Q16.39 -10.47 13.6 -9.79L19.45 0ZM6.43 -12.55H10.71Q12.89 -12.55 13.99 -13.63Q15.1 -14.72 15.1 -16.56Q15.1 -18.39 14.01 -19.43Q12.92 -20.47 10.71 -20.47H6.43Z"},{"c":"K","x":622.6,"d":"M15.57 0 6.43 -10.57V0H2.55V-23.63H6.43V-12.85L15.61 -23.63H20.47L10.2 -11.8L20.64 0Z"},{"c":"S","x":661.12,"d":"M1.97 -6.53H6.12Q6.26 -5 7.33 -4.01Q8.4 -3.03 10.34 -3.03Q12.34 -3.03 13.46 -4Q14.59 -4.96 14.59 -6.49Q14.59 -7.68 13.89 -8.43Q13.19 -9.18 12.16 -9.59Q11.12 -10 9.28 -10.47Q6.97 -11.08 5.53 -11.71Q4.08 -12.34 3.06 -13.67Q2.04 -14.99 2.04 -17.2Q2.04 -19.24 3.06 -20.77Q4.08 -22.3 5.92 -23.12Q7.75 -23.94 10.17 -23.94Q13.6 -23.94 15.79 -22.22Q17.99 -20.5 18.22 -17.51H13.94Q13.84 -18.8 12.72 -19.72Q11.59 -20.64 9.76 -20.64Q8.09 -20.64 7.04 -19.79Q5.98 -18.94 5.98 -17.34Q5.98 -16.25 6.65 -15.56Q7.31 -14.86 8.33 -14.45Q9.35 -14.04 11.12 -13.57Q13.46 -12.92 14.94 -12.27Q16.42 -11.63 17.46 -10.29Q18.5 -8.94 18.5 -6.7Q18.5 -4.9 17.53 -3.3Q16.56 -1.7 14.71 -0.73Q12.85 0.24 10.34 0.24Q7.96 0.24 6.05 -0.6Q4.15 -1.43 3.06 -2.96Q1.97 -4.49 1.97 -6.53Z"}],"tagY":332};
  const NS = 'http://www.w3.org/2000/svg';

  const THEMES = {
    carbon: { c0: '#383838', c1: '#2A2A2A', fg: '#F1EADB', hi: '#FFFFFF', fog: '241,234,219', fogK: 1.0, vig: 0.38, sea: '0,0,0', seaA: 0.34 },
    crema:  { c0: '#F4EEE0', c1: '#E4DAC4', fg: '#2A2A2A', hi: '#8A8578', fog: '42,42,42',   fogK: 0.55, vig: 0.10, sea: '42,42,42', seaA: 0.10 }
  };
  // [ancho, alto, fracción del ancho que ocupa el logo, fracción del alto]
  const FORMATS = {
    wide:     [1920, 1080, 0.56, 0.50],
    square:   [1080, 1080, 0.76, 0.50],
    portrait: [1080, 1920, 0.82, 0.50],
    story:    [1080, 1920, 0.82, 0.50],
    banner:   [1584, 396, 0.52, 0.66]
  };

  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const prog = (t, a, b) => clamp((t - a) / (b - a));
  const easeOut = p => 1 - Math.pow(1 - p, 3);
  const easeInOut = p => (p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2);
  const smooth = p => p * p * (3 - 2 * p);
  const easeBack = (p, c1 = 0.55) => { const c3 = c1 + 1; return 1 + c3 * Math.pow(p - 1, 3) + c1 * Math.pow(p - 1, 2); };
  const mod = (a, n) => ((a % n) + n) % n;
  const rng = seed => () => { seed |= 0; seed = (seed + 0x6D2B79F5) | 0; let t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };

  function el(name, attrs, parent) {
    const e = document.createElementNS(NS, name);
    if (attrs) for (const k in attrs) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  }
  const ringPath = (flat, dy = 0) => {
    let d = '';
    for (let i = 0; i < flat.length; i += 2) d += (i ? 'L' : 'M') + flat[i] + ',' + (flat[i + 1] + dy);
    return d + 'Z';
  };
  function densify(flat, maxLen) {
    const out = [], n = flat.length / 2;
    for (let i = 0; i < n; i++) {
      const x0 = flat[2 * i], y0 = flat[2 * i + 1], j = (i + 1) % n, x1 = flat[2 * j], y1 = flat[2 * j + 1];
      const k = Math.max(1, Math.ceil(Math.hypot(x1 - x0, y1 - y0) / maxLen));
      for (let s = 0; s < k; s++) out.push(x0 + (x1 - x0) * s / k, y0 + (y1 - y0) * s / k);
    }
    return out;
  }

  // ---- La B: puntos densos + peso de "tela" (0 = rígido: mástil y vergas, 1 = borde libre de la vela)
  const BP = densify(GEO.B, 2.2);
  const BN = BP.length / 2;
  const BW = new Float32Array(BN), BS = new Float32Array(BN);
  for (let i = 0; i < BN; i++) {
    const x = BP[2 * i], y = BP[2 * i + 1];
    const wy = y <= 111 ? clamp((y - 8) / 96) : clamp((y - 130) / 110);
    const wx = clamp((x - 70) / 114);
    BW[i] = Math.pow(wy, 0.85) * Math.pow(wx, 0.9);
    BS[i] = y <= 111 ? 0 : 1;
  }
  const PERIOD = 4;                         // el aleteo es periódico cada 4 s (loop sin saltos)
  const W1 = 2 * Math.PI * 2 / PERIOD, W2 = 2 * Math.PI * 3 / PERIOD;

  function sailPath(t, amp) {
    let d = '';
    for (let i = 0; i < BN; i++) {
      const x = BP[2 * i], y = BP[2 * i + 1], w = BW[i] * amp;
      let X = x, Y = y;
      if (w > 0) {
        const s = BS[i] * 1.3;
        const stiff = 1 - 0.85 * clamp((y - 214) / 24);            // el borde inferior de la vela 2 se queda en la línea de flotación
        Y += w * stiff * (7.5 * Math.sin(0.050 * x + 0.030 * y - W1 * t + s) + 2.6 * Math.sin(0.115 * x - 0.050 * y - W2 * t + 0.7));
        X += w * (5.0 + 5.2 * Math.sin(0.035 * y + 0.020 * x - W1 * t + 0.8 + s));
        if (Y > 240.4) Y = 240.4;
      }
      d += (i ? 'L' : 'M') + X.toFixed(2) + ',' + Y.toFixed(2);
    }
    return d + 'Z';
  }


  // ---- Línea de tiempo (segundos). Ritmo rápido: el barco entra navegando, las letras revientan del agua.
  const TL = {
    logo: {
      duration: 4.0,
      line: [0.05, 0.7], ship: [0.12, 1.5], yards: [0.30, 0.65], sail1: [0.50, 0.95], sail2: [0.70, 1.2], billow: [0.6, 1.6],
      letters: [[1.2, 1.8], [1.32, 1.92], [1.44, 2.04]], tagline: [1.95, 2.7], shine: [2.5, 3.3], fog: [0.1, 1.7], push: [0, 5], stop: 1.18
    },
    icon: {
      duration: 3.0,
      line: [0.05, 0.6], ship: [0.12, 1.3], yards: [0.30, 0.65], sail1: [0.50, 0.95], sail2: [0.70, 1.2], billow: [0.6, 1.6],
      letters: [], tagline: [9, 10], shine: [1.9, 2.7], fog: [0.1, 1.5], push: [0, 4], stop: 1.0
    }
  };
  const LETTER_X = [[214, 418], [440, 666], [688, 924]];

  // gotas de espuma (deterministas)
  function makeDrops() {
    const R = rng(21), out = [];
    const burst = (x0, x1, t0, n, ship) => { for (let i = 0; i < n; i++) { const vy = -(230 + R() * 260); out.push({ ship: !!ship, t0: t0 + R() * 0.08, x: x0 + R() * (x1 - x0), vx: (R() - 0.5) * 160, vy, r: 1.4 + R() * 2.2, life: -2 * vy / 1100 }); } };
    return { burst, out, R };
  }

  let UID = 0;

  class BucaLogoAnimation extends HTMLElement {
    static get observedAttributes() { return ['theme', 'format', 'variant', 'mode', 'loop', 'transparent', 'speed', 'autoplay']; }

    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this._t = 0; this._playing = false; this._raf = 0; this._last = 0; this._ended = false; this._built = false;
    }
    connectedCallback() {
      this._build();
      const auto = this.getAttribute('autoplay') !== 'false';
      if (auto) this.play(); else this.seek(this._t);
    }
    disconnectedCallback() { this.pause(); }
    attributeChangedCallback() { if (this._built && this.isConnected) { const was = this._playing; this._build(); if (was) this.play(); else this.seek(this._t); } }

    get duration() { return TL[this._variant].duration; }

    // ---------------------------------------------------------------- construcción
    _build() {
      this._built = true;
      const theme = THEMES[this.getAttribute('theme')] || THEMES.carbon;
      const fmt = FORMATS[this.getAttribute('format')] || FORMATS.wide;
      this._variant = this.getAttribute('variant') === 'icon' ? 'icon' : 'logo';
      this._mode = this.getAttribute('mode') === 'idle' ? 'idle' : 'intro';
      this._loop = this.hasAttribute('loop') && this.getAttribute('loop') !== 'false';
      this._transparent = this.hasAttribute('transparent') && this.getAttribute('transparent') !== 'false';
      this._speed = parseFloat(this.getAttribute('speed')) || 1;
      this._reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
      const th = (this._th = theme), [W, H, fw, fh] = fmt;
      this._W = W; this._H = H;
      const id = 'b' + (++UID);
      const isIcon = this._variant === 'icon';

      this.shadowRoot.innerHTML = '';
      const style = document.createElement('style');
      style.textContent = ':host{display:block;width:100%;line-height:0;contain:content}svg{width:100%;height:100%;display:block}';
      this.shadowRoot.appendChild(style);
      this.style.aspectRatio = W + ' / ' + H;

      const svg = el('svg', { viewBox: `0 0 ${W} ${H}`, preserveAspectRatio: 'xMidYMid slice', role: 'img', 'aria-label': 'BUCA Digital Works' });
      this.shadowRoot.appendChild(svg);
      const defs = el('defs', null, svg);

      const bgG = el('radialGradient', { id: id + 'bg', cx: '50%', cy: '50%', r: '75%' }, defs);
      el('stop', { offset: '0', 'stop-color': th.c0 }, bgG); el('stop', { offset: '1', 'stop-color': th.c1 }, bgG);
      const fogG = el('radialGradient', { id: id + 'fog' }, defs);
      [[0, 1], [0.45, 0.5], [1, 0]].forEach(([o, a]) => el('stop', { offset: o, 'stop-color': `rgb(${th.fog})`, 'stop-opacity': a }, fogG));
      const vigG = el('radialGradient', { id: id + 'vig', cx: '50%', cy: '50%', r: '72%' }, defs);
      el('stop', { offset: '0.55', 'stop-color': '#000', 'stop-opacity': 0 }, vigG);
      el('stop', { offset: '1', 'stop-color': '#000', 'stop-opacity': th.vig }, vigG);
      const lineG = el('linearGradient', { id: id + 'ln', x1: 0, x2: 1, y1: 0, y2: 0 }, defs);
      [[0, 0], [0.22, 0.6], [0.5, 1], [0.78, 0.6], [1, 0]].forEach(([o, a]) => el('stop', { offset: o, 'stop-color': th.fg, 'stop-opacity': a }, lineG));
      const seaG = el('linearGradient', { id: id + 'sea', x1: 0, x2: 0, y1: 0, y2: 1 }, defs);
      [[0, th.seaA], [0.12, th.seaA * 0.55], [1, 0]].forEach(([o, a]) => el('stop', { offset: o, 'stop-color': `rgb(${th.sea})`, 'stop-opacity': a }, seaG));
      const shG = el('linearGradient', { id: id + 'sh', gradientUnits: 'userSpaceOnUse', x1: -600, x2: -300, y1: 0, y2: 0 }, defs);
      [[0, th.fg], [0.38, th.fg], [0.5, th.hi], [0.62, th.fg], [1, th.fg]].forEach(([o, c]) => el('stop', { offset: o, 'stop-color': c }, shG));
      this._shade = shG;

      const waterClip = el('clipPath', { id: id + 'wc' }, defs);
      this._waterClip = el('path', null, waterClip);                   // región por encima de la superficie del mar
      const bClip = el('clipPath', { id: id + 'bc' }, defs);
      this._cStem = el('rect', { x: -30, y: -12, width: 90, height: 270 }, bClip);
      this._cY1 = el('rect', { x: 58, y: -12, width: 0, height: 24 }, bClip);
      this._cY2 = el('rect', { x: 58, y: 114, width: 0, height: 22 }, bClip);
      this._cS1 = el('path', null, bClip);
      this._cS2 = el('path', null, bClip);
      this._bClipId = id + 'bc';

      if (!this._transparent) {
        el('rect', { width: W, height: H, fill: `url(#${id}bg)` }, svg);
        this._fogBack = el('g', { opacity: 0 }, svg);
      }
      const cam = this._cam = el('g', null, svg);
      const logo = this._logo = el('g', null, cam);

      // layout
      const bw = isIcon ? 208 : 948, bh = isIcon ? 246 : 346;
      const s = this._s = Math.min(W * fw * (isIcon ? 0.42 : 1) / bw, H * fh * (isIcon ? 1.5 : 1) / bh);
      const cx = isIcon ? 80 : 450, cy = isIcon ? 117 : 163;
      this._tx = W / 2 - cx * s; this._ty = H / 2 - cy * s;
      logo.setAttribute('transform', `translate(${this._tx.toFixed(2)},${this._ty.toFixed(2)}) scale(${s.toFixed(4)})`);
      this._cx = cx;
      this._yb = this._ty + 240 * s;
      // muestreo de la superficie del mar (coordenadas locales)
      const xL = -this._tx / s - 80, xR = (W - this._tx) / s + 80, step = 14;
      this._xs = []; for (let x = xL; x <= xR + step; x += step) this._xs.push(x);
      this._xL = xL; this._xR = xR;
      this._shipX0 = -this._tx / s - 90;                                // fuera de cuadro por la izquierda

      // capas (de atrás hacia adelante)
      const water = el('g', { 'clip-path': `url(#${id}wc)` }, logo);
      const fill = `url(#${id}sh)`;
      this._Bg = el('g', null, water);
      this._B = el('path', { fill, 'clip-path': `url(#${id}bc)` }, this._Bg);
      this._L = [];
      if (!isIcon) {
        [GEO.U, GEO.C].forEach(r => this._L.push(el('path', { fill, d: ringPath(r) }, el('g', null, water))));
        this._L.push(el('path', { fill, 'fill-rule': 'evenodd', d: ringPath(GEO.A[0]) + ringPath(GEO.A[1]) }, el('g', null, water)));
        this._Lg = this._L.map(p => p.parentNode);
      }
      this._sea = el('path', { fill: `url(#${id}sea)` }, logo);
      this._surf = el('path', { fill: 'none', stroke: `url(#${id}ln)`, 'stroke-width': 1.8, 'stroke-linejoin': 'round' }, logo);
      // estela del barco
      this._wake = []; for (let k = 0; k < 5; k++) this._wake.push(el('rect', { height: 1.7 - k * 0.15, rx: 0.8, fill: th.fg, opacity: 0 }, logo));
      // ondas
      this._ripples = el('g', { fill: 'none', stroke: th.fg, 'stroke-width': 1.5 }, logo);
      this._rip = [];
      const rc = isIcon ? [45] : [45, 316, 552, 806];
      rc.forEach(x => { for (let k = 0; k < 2; k++) this._rip.push({ x, k, e: el('ellipse', { cx: x, cy: 240.6, rx: 0, ry: 0, opacity: 0 }, this._ripples) }); });
      // espuma
      const D = makeDrops();
      D.burst(40, 78, TL[this._variant].stop, 12, true);
      if (!isIcon) LETTER_X.forEach(([a, b], i) => D.burst(a + 8, b - 8, TL.logo.letters[i][0] + 0.2, 11));
      this._drops = D.out.map(d => Object.assign(d, { e: el('circle', { fill: th.fg, r: d.r, opacity: 0 }, logo) }));
      // tagline
      this._tag = [];
      if (!isIcon) {
        const g = el('g', { fill: th.fg }, logo);
        GEO.tag.forEach(gl => this._tag.push({ x: gl.x, e: el('path', { d: gl.d, opacity: 0 }, g) }));
      }
      if (!this._transparent) {
        this._fogFront = el('g', { opacity: 1 }, svg);
        const R = rng(7);
        const mk = (n, layer) => Array.from({ length: n }, () => {
          const rx = (0.2 + R() * 0.28) * W;
          return { rx, ry: (0.09 + R() * 0.1) * H * (layer ? 1.2 : 1), u: R(), v: R(), vel: (R() < 0.5 ? -1 : 1) * (8 + R() * 24) * 2, a: (layer ? 0.55 : 0.32) * (0.55 + R() * 0.45) };
        });
        this._pFront = mk(11, 1).map(p => Object.assign(p, { e: el('ellipse', { fill: `url(#${id}fog)` }, this._fogFront) }));
        this._pBack = mk(8, 0).map(p => Object.assign(p, { e: el('ellipse', { fill: `url(#${id}fog)` }, this._fogBack) }));
        el('rect', { width: W, height: H, fill: `url(#${id}vig)` }, svg);
      }
    }

    // ---------------------------------------------------------------- dibujo (función pura de t)
    render(t) {
      if (!this._built) return;
      const TLv = TL[this._variant], isIcon = this._variant === 'icon', tl = TLv;
      const idle = this._mode === 'idle' || this._reduce;
      const tf = this._reduce ? 0 : t;                                // tiempo del aleteo / balanceo
      const th = this._th, W = this._W, H = this._H;

      let fade = 1, tt = idle ? 99 : t;
      if (this._loop && !idle) {
        const hold = 0.9, out = 0.7, cyc = TLv.duration + hold + out;
        tt = mod(t, cyc);
        fade = 1 - prog(tt, TLv.duration + hold, cyc);
      }

      // cámara: empuje suave
      const k = idle ? 1 : 1 + 0.06 * easeOut(prog(tt, tl.push[0], tl.push[1]));
      this._cam.setAttribute('transform', `translate(${W / 2},${H / 2}) scale(${k.toFixed(5)}) translate(${-W / 2},${-H / 2})`);
      this._cam.setAttribute('opacity', fade.toFixed(3));

      // ---- mar: superficie ondulante (amplitud: entrada del barco + ola que empuja las letras)
      const pl = easeInOut(prog(tt, tl.line[0], tl.line[1]));
      const pulse = isIcon ? 0 : Math.exp(-Math.pow((tt - 1.5) / 0.55, 2));
      const ampW = (0.9 + 2.2 * smooth(prog(tt, 0.1, 0.5)) * (1 - prog(tt, 1.0, 1.3)) + 5.0 * pulse) * (this._reduce ? 0.3 : 1);
      const xs = this._xs, n = xs.length, ys = new Array(n);
      for (let i = 0; i < n; i++) ys[i] = 240 - ampW * (0.5 + 0.5 * Math.sin(0.02 * xs[i] - 7 * tf + 0.6 * Math.sin(0.007 * xs[i] + tf)));
      let dWater = `M${this._xL},-4000L${this._xR + 14},-4000`, dSea = '', dSurf = '';
      for (let i = n - 1; i >= 0; i--) dWater += `L${xs[i].toFixed(1)},${ys[i].toFixed(2)}`;
      this._waterClip.setAttribute('d', dWater + 'Z');
      for (let i = 0; i < n; i++) dSea += (i ? 'L' : 'M') + xs[i].toFixed(1) + ',' + ys[i].toFixed(2);
      this._sea.setAttribute('d', dSea + `L${xs[n - 1]},2600L${xs[0]},2600Z`);
      this._sea.setAttribute('opacity', (smooth(prog(tt, tl.line[0], tl.line[1] + 0.3))).toFixed(3));
      const half = (this._xR - this._xL) / 2 * pl, cxm = (this._xL + this._xR) / 2;
      for (let i = 0; i < n; i++) if (Math.abs(xs[i] - cxm) <= half) dSurf += (dSurf ? 'L' : 'M') + xs[i].toFixed(1) + ',' + ys[i].toFixed(2);
      this._surf.setAttribute('d', dSurf || 'M0,0');

      // ---- el barco (B): navega desde la izquierda, frena con inercia y se balancea
      const sp = prog(tt, tl.ship[0], tl.ship[1]);
      const e = easeBack(sp, 0.42), D0 = this._shipX0;
      const xOff = D0 * (1 - e);
      const e2 = easeBack(clamp(prog(tt + 0.02, tl.ship[0], tl.ship[1])), 0.42), e1 = easeBack(clamp(prog(tt - 0.02, tl.ship[0], tl.ship[1])), 0.42);
      const spd = clamp(Math.abs(e2 - e1) / 0.04 * Math.abs(D0) / (Math.abs(D0) * 2.4));   // 0..1 aprox.
      const since = Math.max(0, tt - tl.stop);
      const rockA = (1 - 0.0) * (-3.4 * spd + (tt > tl.stop ? 3.6 * Math.exp(-since * 2.4) * Math.sin(2 * Math.PI * 1.15 * since) : 0));
      const idleRock = this._reduce ? 0 : 0.8 * Math.sin(W1 * tf) * smooth(prog(tt, tl.stop, tl.stop + 1));
      const bob = (this._reduce ? 0 : 1.8 * Math.sin(W1 * tf + 1.0)) * smooth(prog(tt, tl.ship[0], tl.ship[0] + 0.4));
      this._Bg.setAttribute('transform', `translate(${xOff.toFixed(2)},${bob.toFixed(2)}) rotate(${(rockA + idleRock).toFixed(3)},45,240)`);
      this._Bg.setAttribute('opacity', sp > 0 ? 1 : 0);

      // clip: vergas → velas (ocurre mientras navega)
      const ext = easeInOut(prog(tt, tl.yards[0], tl.yards[1])) * 130;
      this._cY1.setAttribute('width', ext.toFixed(2)); this._cY2.setAttribute('width', ext.toFixed(2));
      const p1 = prog(tt, tl.sail1[0], tl.sail1[1]), p2 = prog(tt, tl.sail2[0], tl.sail2[1]);
      const mkClip = (p, y0, y1) => {
        const yc = y0 + (y1 - y0) * easeOut(p), wob = 7 * (1 - p * p);
        let d = `M58,${y0}L230,${y0}`;
        for (let x = 230; x >= 58; x -= 12) d += `L${x},${(yc + wob * Math.sin(x * 0.09 + tt * 8)).toFixed(2)}`;
        return d + 'Z';
      };
      const done = p1 >= 1 && p2 >= 1 && ext >= 130;
      if (done) { if (this._B.hasAttribute('clip-path')) this._B.removeAttribute('clip-path'); }
      else {
        if (!this._B.hasAttribute('clip-path')) this._B.setAttribute('clip-path', `url(#${this._bClipId})`);
        this._cS1.setAttribute('d', p1 <= 0 ? '' : mkClip(p1, -12, 118));
        this._cS2.setAttribute('d', p2 <= 0 ? '' : mkClip(p2, 131, 262));
      }
      const amp = ((0.3 + 0.7 * easeOut(prog(tt, tl.billow[0], tl.billow[1]))) * (1 + 0.9 * spd)) * (this._reduce ? 0 : 1);
      this._B.setAttribute('d', sailPath(tf, idle ? 1 : amp));

      // estela
      this._wake.forEach((w, i) => {
        const len = (60 + i * 55) * Math.pow(spd, 0.8) * 3.2, xe = xOff - 14 - i * 22;
        w.setAttribute('x', (xe - len).toFixed(1)); w.setAttribute('width', Math.max(0, len).toFixed(1));
        w.setAttribute('y', (244 + i * 7).toFixed(1));
        w.setAttribute('opacity', (0.55 * Math.pow(spd, 0.6) * (1 - i * 0.14)).toFixed(3));
      });

      // letras: revientan del agua con rebote
      if (!isIcon) {
        for (let i = 0; i < 3; i++) {
          const [a, b] = tl.letters[i], ee = easeBack(prog(tt, a, b), 1.25);
          this._Lg[i].setAttribute('transform', `translate(0,${((1 - ee) * 320).toFixed(2)})`);
        }
        const g0 = tl.tagline[0], g1 = tl.tagline[1], nT = this._tag.length;
        const spread = 0.88 + 0.12 * easeOut(prog(tt, g0, g1));
        this._tag.forEach((gl, i) => {
          const d = (g1 - g0 - 0.45) * i / (nT - 1), p = prog(tt, g0 + d, g0 + d + 0.45), ee = easeOut(p);
          const x = this._cx + (gl.x - this._cx) * spread;
          gl.e.setAttribute('transform', `translate(${x.toFixed(2)},${(332 + (1 - ee) * 18).toFixed(2)})`);
          gl.e.setAttribute('opacity', ee.toFixed(3));
        });
      }
      // ondas
      const rs = isIcon ? [tl.stop - 0.05] : [tl.stop - 0.05, tl.letters[0][0] + 0.25, tl.letters[1][0] + 0.25, tl.letters[2][0] + 0.25];
      this._rip.forEach((r, j) => {
        const idx = isIcon ? 0 : (j >> 1), p0 = rs[idx] + r.k * 0.14, p = prog(tt, p0, p0 + 1.0);
        if (p <= 0 || p >= 1) { r.e.setAttribute('opacity', 0); return; }
        const rx = 24 + 170 * easeOut(p);
        r.e.setAttribute('rx', rx.toFixed(2)); r.e.setAttribute('ry', (rx * 0.085).toFixed(2));
        r.e.setAttribute('opacity', (0.6 * Math.pow(1 - p, 1.6)).toFixed(3));
      });
      // espuma
      this._drops.forEach(d => {
        const tau = tt - d.t0;
        if (tau <= 0 || tau >= d.life) { d.e.setAttribute('opacity', 0); return; }
        const x = d.x + d.vx * tau + (d.ship ? xOff : 0), y = 240 + d.vy * tau + 0.5 * 1100 * tau * tau;
        d.e.setAttribute('cx', x.toFixed(1)); d.e.setAttribute('cy', y.toFixed(1));
        d.e.setAttribute('opacity', (0.85 * Math.pow(1 - tau / d.life, 0.6)).toFixed(3));
      });
      // destello
      const sh = easeInOut(prog(tt, tl.shine[0], tl.shine[1])), sx = -420 + sh * 1500;
      this._shade.setAttribute('x1', sx.toFixed(1)); this._shade.setAttribute('x2', (sx + 300).toFixed(1));

      // niebla
      if (!this._transparent) {
        const ff = idle ? 0 : 1 - smooth(prog(tt, tl.fog[0], tl.fog[1]));
        this._fogFront.setAttribute('opacity', (ff * th.fogK).toFixed(3));
        this._fogBack.setAttribute('opacity', ((idle ? 1 : easeOut(prog(tt, 0, 1.2))) * th.fogK * 0.55).toFixed(3));
        const place = (p, shift) => {
          const span = W + 2 * p.rx, x = mod(p.u * span + p.vel * t * (shift ? 1.4 : 1), span) - p.rx;
          p.e.setAttribute('cx', x.toFixed(1)); p.e.setAttribute('cy', (this._yb + (p.v - 0.45) * 0.62 * H).toFixed(1));
          p.e.setAttribute('rx', p.rx.toFixed(1)); p.e.setAttribute('ry', p.ry.toFixed(1)); p.e.setAttribute('opacity', p.a.toFixed(3));
        };
        this._pFront.forEach(p => place(p, true));
        this._pBack.forEach(p => place(p, false));
      }
    }

    // ---------------------------------------------------------------- control
    seek(t) { this.pause(); this._t = t; this.render(t); }
    restart() { this._t = 0; this._ended = false; if (this._playing) this._last = performance.now(); else this.play(); }
    play() {
      if (this._playing) return;
      this._playing = true; this._last = performance.now();
      const tick = now => {
        if (!this._playing) return;
        this._t += (now - this._last) / 1000 * this._speed; this._last = now;
        this.render(this._t);
        if (!this._ended && this._t >= this.duration) { this._ended = true; this.dispatchEvent(new CustomEvent('ended')); }
        this._raf = requestAnimationFrame(tick);
      };
      this._raf = requestAnimationFrame(tick);
    }
    pause() { this._playing = false; cancelAnimationFrame(this._raf); }
  }
  customElements.define('buca-logo-animation', BucaLogoAnimation);
})();
